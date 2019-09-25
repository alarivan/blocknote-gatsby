import React from "react"
import { TNote } from "../../../reducers/notes/types"

interface Props {
  note: TNote
}

const Note: React.FC<Props> = ({ note }) => {
  return <div dangerouslySetInnerHTML={{ __html: note.body }}></div>
}

export default Note
