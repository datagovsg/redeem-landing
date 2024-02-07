type RgbColour = [r: number, g: number, b: number]

const HEX_SHORTHAND_EXPAND_REGEX = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

const LUM_FLARE = 0.05
const MIN_WCAG_AA_CONTRAST_RATIO = 4.5

const hexToRgb = (hex: string): RgbColour | null => {
  // Expanding hex string to expanded form if available.
  // E.g. `'03F'` to full form `'0033FF'`
  const normalizedHex = hex.replace(
    HEX_SHORTHAND_EXPAND_REGEX,
    (_m, r, g, b) => r + r + g + g + b + b,
  )

  // E.g. `'0033FF'` to `[0033FF, 00, 33, FF]`
  const result = HEX_REGEX.exec(normalizedHex)
  if (!result) return null

  // Slice to remove the first element which is just the full matched string.
  return result.slice(1).map((block) => parseInt(block, 16)) as RgbColour
}

const getLuminance = (rgbColour: RgbColour) => {
  const a = rgbColour.map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

export const getContrast = (
  foreground: string,
  background: string,
): number | null => {
  if (!foreground || !background) return null
  const rgb1 = hexToRgb(foreground)
  const rgb2 = hexToRgb(background)

  if (!rgb1 || !rgb2) return null

  const lum1 = getLuminance(rgb1)
  const lum2 = getLuminance(rgb2)

  return (Math.max(lum1, lum2) + LUM_FLARE) / (Math.min(lum1, lum2) + LUM_FLARE)
}

export const isMeetsWcagAaRatio = (
  foreground: string,
  background: string,
): boolean | null => {
  const contrast = getContrast(foreground, background)
  if (contrast === null) return null
  return contrast >= MIN_WCAG_AA_CONTRAST_RATIO
}

export const getContrastColor = (
  fg: string,
  bg: string,
  fallback: string,
): string => {
  const meetsWcagAaRatio = isMeetsWcagAaRatio(fg, bg)
  if (meetsWcagAaRatio === null) return fg
  return meetsWcagAaRatio ? fg : fallback
}
