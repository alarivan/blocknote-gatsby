import striptags from "striptags"

export const copyToClipBoard = (str: string): void => {
  const el = document.createElement("textarea")
  el.value = striptags(str)
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}
