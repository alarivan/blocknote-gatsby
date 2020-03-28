import React from "react"
import { TNote } from "../../reducers/notes/types"
import ActionPanel from "./Note/ActionPanel"

interface Props {
  note: TNote
}

const Viewer: React.FC<Props> = ({ note }) => {
  return (
    <>
      <ActionPanel note={note} view={false} />
      <div dangerouslySetInnerHTML={{ __html: note.body }}></div>
    </>
  )
}

export default Viewer
