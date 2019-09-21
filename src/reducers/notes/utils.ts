import uuidv4 from "uuidv4"

export function initNote(body = "") {
  return {
    id: uuidv4(),
    body,
  }
}
