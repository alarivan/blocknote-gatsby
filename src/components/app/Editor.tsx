import React, { useState, Dispatch, useEffect } from "react"
import { navigate } from "gatsby"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { TNote, TNotesAction } from "../../reducers/notes/types"
import { saveNoteAction } from "../../reducers/notes/actions"
import TagsInput from "./common/TagsInput"
import useNoteTags from "../../hooks/useNoteTags"

interface Props {
  note: TNote
  dispatch: Dispatch<TNotesAction>
}

const Editor: React.FC<Props> = ({ note, dispatch }) => {
  const [text, setText] = useState(note.body)
  const noteTags = useNoteTags(note.tags)

  useEffect(() => {
    setText(note.body)
  }, [note, setText])

  const handleChange = (value: string) => setText(value)
  const handleSave = () => {
    dispatch(saveNoteAction({ id: note.id, body: text, tags: note.tags }))

    navigate(`app/edit/${note.id}`)
  }

  const handleTagAdd = (tag: string) => {
    const newTags = note.tags.add(tag)
    dispatch(saveNoteAction({ id: note.id, body: text, tags: newTags }))

    navigate(`app/edit/${note.id}`)
  }

  return (
    <>
      <ReactQuill value={text} onChange={handleChange} />
      <TagsInput noteTags={noteTags} onTagAdd={handleTagAdd} />
      <button onClick={handleSave}>Save</button>
    </>
  )
}

export default Editor
