import React from "react"
import { TNote } from "../../../reducers/notes/types"
import ActionPanel from "../Note/ActionPanel"

interface Props {
  note: TNote
}

const Note: React.FC<Props> = ({ note }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: note.body }}></div>
      <ActionPanel note={note} />
    </div>
  )
}

export default Note
