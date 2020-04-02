import { useLocalStoragePersistedReducer } from "./useLocalStoragePersistedReducer"
import { LOCAL_STORAGE_KEY_NOTES } from "../constants"
import { TNotesState, TNotesAction } from "../reducers/notes/types"
import { Map, Set } from "immutable"

type PersistedReducer = (
  reducer: React.Reducer<TNotesState, TNotesAction>,
  initialState: TNotesState
) => [TNotesState, React.Dispatch<TNotesAction>]

export const useNotesPersistedReducer: PersistedReducer = (
  reducer,
  initialState
) => {
  return useLocalStoragePersistedReducer<TNotesState, TNotesAction>(
    reducer,
    initialState,
    LOCAL_STORAGE_KEY_NOTES,
    state => Map(state).map(note => ({ ...note, tags: Set(note.tags) }))
  )
}
