import randomcolor from "randomcolor"

export default function generateColor(color?: string): string {
  if (color) return color

  return randomcolor({ luminosity: "light" })
}
