import { TNotesState, TNotesAction, SET_NOTES, SAVE_NOTE } from "./types"
import { Map } from "immutable"

export const initialState: TNotesState = Map()

export function notesReducer(state: TNotesState, action: TNotesAction) {
  switch (action.type) {
    case SET_NOTES:
      return action.payload.notes

    case SAVE_NOTE:
      return state.set(action.payload.note.id, action.payload.note)

    default:
      return state
  }
}
