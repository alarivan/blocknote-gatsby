import { EMPTY_ACTION } from "../types"
import { Map } from "immutable"

export type TNote = {
  id: string
  body: string
}
export type TNotesState = Map<string, TNote>

export const SET_NOTES = "SET_NOTES"
export type SET_NOTES_ACTION = {
  type: typeof SET_NOTES
  payload: {
    notes: TNotesState
  }
}
export const SAVE_NOTE = "SAVE_NOTE"
export type SAVE_NOTE_ACTION = {
  type: typeof SAVE_NOTE
  payload: {
    note: TNote
  }
}

export type TNotesAction = SET_NOTES_ACTION | SAVE_NOTE_ACTION | EMPTY_ACTION
