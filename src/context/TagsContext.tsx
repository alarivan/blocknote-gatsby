import React, { Dispatch, useMemo } from "react"
import { TTagsAction, TTagsState } from "../reducers/tags/types"
import { initialState, tagsReducer } from "../reducers/tags/reducer"
import { useTagsPersistedReducer } from "../hooks/useTagsPersistedReducer"

type TTagsContext = {
  state: TTagsState
  dispatch: Dispatch<TTagsAction>
}

export const TagsContext = React.createContext<TTagsContext>({
  state: initialState,
  dispatch: (() => 0) as React.Dispatch<TTagsAction>,
})

export const TagsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useTagsPersistedReducer(tagsReducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <TagsContext.Provider value={contextValue}>{children}</TagsContext.Provider>
  )
}
