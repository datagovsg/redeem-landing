export const hexToRgba = (hex: string, opacity?: number) => {
  // Handle case where hex code is passed without the hash
  if (!hex) {
    return 'rgba(0, 0, 0, 1)'
  }
  if (hex[0] !== '#') {
    hex = `#${hex}`
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const a = opacity ? opacity : 1

  return `rgba(${r}, ${g}, ${b}, ${a})`
}
