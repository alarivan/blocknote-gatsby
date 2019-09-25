import React from "react"
import { TNote } from "../reducers/notes/types"
import { Link } from "@reach/router"

interface Props {
  notes: TNote[]
}

const Listing: React.FC<Props> = ({ notes }) => {
  return (
    <div>
      {notes.map(note => (
        <div key={note.id}>
          <Link to={`edit/${note.id}`}>Edit</Link>
          <div dangerouslySetInnerHTML={{ __html: note.body }}></div>
        </div>
      ))}
    </div>
  )
}

export default Listing
