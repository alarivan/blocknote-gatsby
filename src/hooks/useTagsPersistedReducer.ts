import { useLocalStoragePersistedReducer } from "./useLocalStoragePersistedReducer"
import { LOCAL_STORAGE_KEY_TAGS } from "../constants"
import { TTagsState, TTagsAction } from "../reducers/tags/types"
import { Map } from "immutable"

type PersistedReducer = (
  reducer: React.Reducer<TTagsState, TTagsAction>,
  initialState: TTagsState
) => [TTagsState, React.Dispatch<TTagsAction>]

export const useTagsPersistedReducer: PersistedReducer = (
  reducer,
  initialState
) => {
  return useLocalStoragePersistedReducer<TTagsState, TTagsAction>(
    reducer,
    initialState,
    LOCAL_STORAGE_KEY_TAGS,
    state => Map(state)
  )
}
