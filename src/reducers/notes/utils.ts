import uuidv4 from "uuidv4"
import { Set } from "immutable"

export function initNote(body = "") {
  return {
    id: uuidv4(),
    body,
    tags: Set(),
  }
}
