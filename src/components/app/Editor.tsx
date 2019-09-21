import React, { useState, Dispatch, useEffect } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { TNote, TNotesAction } from "../../reducers/notes/types"
import { saveNoteAction } from "../../reducers/notes/actions"
import { navigate } from "gatsby"

interface Props {
  note: TNote
  dispatch: Dispatch<TNotesAction>
}

const Editor: React.FC<Props> = ({ note, dispatch }) => {
  const [text, setText] = useState(note.body)

  useEffect(() => {
    setText(note.body)
  }, [note, setText])

  const handleChange = (value: string) => setText(value)
  const handleSave = () => {
    dispatch(saveNoteAction({ id: note.id, body: text }))

    navigate(`app/edit/${note.id}`)
  }

  return (
    <>
      <ReactQuill value={text} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </>
  )
}

export default Editor
