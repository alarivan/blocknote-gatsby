import React, { Dispatch, useMemo } from "react"
import { TNotesAction, TNotesState } from "../reducers/notes/types"
import { initialState, notesReducer } from "../reducers/notes/reducer"
import { useNotesPersistedReducer } from "../hooks/useNotesPersistedReducer"

type TNotesContext = {
  state: TNotesState
  dispatch: Dispatch<TNotesAction>
}

export const NotesContext = React.createContext<TNotesContext>({
  state: initialState,
  dispatch: (() => 0) as React.Dispatch<TNotesAction>,
})

export const NotesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useNotesPersistedReducer(notesReducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  )
}
