import React from "react"
import { Seq } from "immutable"
import { TNote } from "../../reducers/notes/types"
import Note from "./Listing/Note"

interface Props {
  notes: Seq.Indexed<TNote>
}

const Listing: React.FC<Props> = ({ notes }) => {
  return (
    <div>
      {notes.map(note => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  )
}

export default Listing
