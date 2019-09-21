import React, { useContext, useMemo } from "react"
import { RouteComponentProps } from "@reach/router"
import { NotesContext } from "../../../context/NotesContext"
import Editor from "../Editor"
import { TNotesState } from "../../../reducers/notes/types"
import { initNote } from "../../../reducers/notes/utils"

interface Props extends RouteComponentProps {
  id?: string
}

function _getNote(id: string | undefined, state: TNotesState) {
  const note = id ? state.get(id) : null
  return note ? note : initNote()
}

const Main: React.FC<Props> = ({ id }) => {
  const { state, dispatch } = useContext(NotesContext)
  const note = useMemo(() => _getNote(id, state), [id, state])

  return (
    <div>
      <Editor note={note} dispatch={dispatch} />
    </div>
  )
}

export default Main
