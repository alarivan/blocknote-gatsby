import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { TNote } from "../../../reducers/notes/types"

import Button from "@material-ui/core/Button"

import { navigate } from "@reach/router"
import { copyToClipBoard } from "../../utils/copyToClipBoard"
import CopyButton from "./CopyButton"

interface Props {
  note: TNote
  view?: Boolean
}

const useStyles = makeStyles({
  panel: {
    display: "flex",
  },
  copyDone: {},
  cont: {
    position: "absolute",
  },
})

const ActionPanel: React.FC<Props> = ({ note, view = true }) => {
  const classes = useStyles()

  const handleEdit = () => {
    navigate(`/app/edit/${note.id}`)
  }
  const handleView = () => navigate(`/app/view/${note.id}`)

  const handleCopy = () => {
    copyToClipBoard(note.body)
  }
  const handleDelete = () => {}

  return (
    <div className={classes.panel}>
      {view && (
        <Button onClick={handleView} variant="outlined">
          View
        </Button>
      )}
      <CopyButton onClick={handleCopy} variant="outlined" />
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
