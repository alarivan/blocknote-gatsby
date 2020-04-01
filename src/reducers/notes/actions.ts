import {
  SET_NOTES,
  SET_NOTES_ACTION,
  SAVE_NOTE_ACTION,
  SAVE_NOTE,
  DELETE_NOTE_ACTION,
  DELETE_NOTE,
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

export function deleteNoteAction(id: string): DELETE_NOTE_ACTION {
  return {
    type: DELETE_NOTE,
    payload: { id },
  }
}
