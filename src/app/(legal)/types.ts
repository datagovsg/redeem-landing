export type Line = {
  type: 'text' | 'header'
  value: React.ReactNode
  children?: Line[]
  label?: string
}
