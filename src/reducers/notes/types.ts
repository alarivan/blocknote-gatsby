import { EMPTY_ACTION } from "../types"
import { Map, Set } from "immutable"

export type TNoteTags = Set<string>

export type TNote = {
  id: string
  body: string
  tags: TNoteTags
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

export const DELETE_NOTE = "DELETE_NOTE"
export type DELETE_NOTE_ACTION = {
  type: typeof DELETE_NOTE
  payload: {
    id: string
  }
}

export type TNotesAction =
  | SET_NOTES_ACTION
  | SAVE_NOTE_ACTION
  | EMPTY_ACTION
  | DELETE_NOTE_ACTION
