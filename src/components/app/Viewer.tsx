import React from "react"
import { TNote } from "../../reducers/notes/types"
import ActionPanel from "./Note/ActionPanel"

interface Props {
  note: TNote
}

const Viewer: React.FC<Props> = ({ note }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: note.body }}></div>
      <ActionPanel note={note} view={false} />
    </>
  )
}

export default Viewer
