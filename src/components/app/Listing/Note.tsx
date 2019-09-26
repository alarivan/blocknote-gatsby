import React from "react"
import { TNote } from "../../../reducers/notes/types"
import ActionPanel from "../Note/ActionPanel"

interface Props {
  note: TNote
}

const Note: React.FC<Props> = ({ note }) => {
  return (
    <div>
      <ActionPanel note={note} />
      <div dangerouslySetInnerHTML={{ __html: note.body }}></div>
    </div>
  )
}

export default Note
