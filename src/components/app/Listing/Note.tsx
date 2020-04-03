import React, { useRef } from "react"
import { TNote } from "../../../reducers/notes/types"
import ActionPanel from "../Note/ActionPanel"

interface Props {
  note: TNote
}

const Note: React.FC<Props> = ({ note }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const body = note.body
    .replace("<p>^c</p>", "<span class='copy'>")
    .replace("<p>c^</p>", "</span>")

  return (
    <div>
      <ActionPanel noteRef={contentRef} note={note} />
      <div ref={contentRef} dangerouslySetInnerHTML={{ __html: body }}></div>
    </div>
  )
}

export default Note
