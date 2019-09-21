import React, { useContext } from "react"
import { RouteComponentProps, Link } from "@reach/router"
import { NotesContext } from "../../../context/NotesContext"
import { TNote } from "../../../reducers/notes/types"

interface Props extends RouteComponentProps {}

const Main: React.FC<Props> = () => {
  const { state } = useContext(NotesContext)

  return (
    <div>
      {state.valueSeq().map((note: TNote) => (
        <div key={note.id}>
          <Link to={`edit/${note.id}`}>Edit</Link>
          <div dangerouslySetInnerHTML={{ __html: note.body }}></div>
        </div>
      ))}
    </div>
  )
}

export default Main
