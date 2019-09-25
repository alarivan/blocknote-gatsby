import React from "react"
import { TNote } from "../../../reducers/notes/types"

import { Button } from "rebass"
import { navigate } from "@reach/router"

interface Props {
  note: TNote
}

const ActionPanel: React.FC<Props> = ({ note }) => {
  const handleEdit = () => {
    navigate(`edit/${note.id}`)
  }
  const handleView = () => {}
  const handleCopy = () => {}
  const handleDelete = () => {}

  return (
    <div>
      <Button onClick={handleView} variant="outline" mr={2}>
        View
      </Button>
      <Button onClick={handleCopy} variant="outline" mr={2}>
        Copy
      </Button>
      <Button onClick={handleEdit} variant="outline" mr={2}>
        Edit
      </Button>
      <Button onClick={handleDelete} variant="outline">
        Delete
      </Button>
    </div>
  )
}

export default ActionPanel
