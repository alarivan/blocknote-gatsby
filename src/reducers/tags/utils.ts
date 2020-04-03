import generateColor from "../../components/utils/generateColor"

export function initTag(id: string, color?: string) {
  return {
    id,
    color: generateColor(color),
  }
}
