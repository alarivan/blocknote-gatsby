import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { TNote } from "../../../reducers/notes/types"

import Button from "@material-ui/core/Button"
import { navigate } from "@reach/router"

interface Props {
  note: TNote
}

const useStyles = makeStyles({
  panel: {
    display: "flex",
  },
})

const ActionPanel: React.FC<Props> = ({ note }) => {
  const classes = useStyles()

  const handleEdit = () => {
    navigate(`app/edit/${note.id}`)
  }
  const handleView = () => {}
  const handleCopy = () => {}
  const handleDelete = () => {}

  return (
    <div className={classes.panel}>
      <Button onClick={handleView} variant="outlined">
        View
      </Button>
      <Button onClick={handleCopy} variant="outlined">
        Copy
      </Button>
      <Button onClick={handleEdit} variant="outlined">
        Edit
      </Button>
      <Button onClick={handleDelete} variant="outlined">
        Delete
      </Button>
    </div>
  )
}

export default ActionPanel
