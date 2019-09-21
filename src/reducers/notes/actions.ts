import {
  SET_NOTES,
  SET_NOTES_ACTION,
  SAVE_NOTE_ACTION,
  SAVE_NOTE,
  TNotesState,
  TNote,
} from "./types"

export function setNotesAction(notes: TNotesState): SET_NOTES_ACTION {
  return {
    type: SET_NOTES,
    payload: { notes },
  }
}

export function saveNoteAction(note: TNote): SAVE_NOTE_ACTION {
  return {
    type: SAVE_NOTE,
    payload: { note },
  }
}
