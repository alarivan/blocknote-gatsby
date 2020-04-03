import striptags from "striptags"

export const copyToClipBoard = (str: string): void => {
  const el = document.createElement("textarea")
  el.value = striptags(str)
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}

export function copyElementToClipboard(element: HTMLElement) {
  window.getSelection()!.removeAllRanges()
  let range = document.createRange()

  const copyElement = element.querySelector(".copy")
  range.selectNode(copyElement || element)

  window.getSelection()!.addRange(range)
  document.execCommand("copy")
  window.getSelection()!.removeAllRanges()
}
