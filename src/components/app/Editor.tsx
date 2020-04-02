import React, { useState, Dispatch } from "react"
import { navigate } from "gatsby"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { Box } from "@material-ui/core"
import { TNote, TNotesAction, TNoteTags } from "../../reducers/notes/types"
import { TTag } from "../../reducers/tags/types"
import { saveNoteAction } from "../../reducers/notes/actions"
import useNoteTags from "../../hooks/useNoteTags"
import useInput from "../../hooks/useInput"
import TagInput from "./common/TagInput"
import TagList from "./common/TagList"
import useTagDispatch from "../../hooks/useTagDispatch"
import useTagSuggestions from "../../hooks/useTagSuggestions"

interface Props {
  note: TNote
  dispatch: Dispatch<TNotesAction>
}

const Editor: React.FC<Props> = ({ note, dispatch }) => {
  const { createTag } = useTagDispatch()
  const noteTags = useNoteTags(note.tags)
  const [tagInput, handleTagChange, setTagInput] = useInput("")
  const suggestions = useTagSuggestions(tagInput, noteTags)

  const [text, setText] = useState(note.body)
  const handleTextChange = (value: string) => setText(value)

  const saveNote = (tags: TNoteTags) => {
    dispatch(saveNoteAction({ id: note.id, body: text, tags }))

    navigate(`app/edit/${note.id}`)
  }

  const handleSave = () => saveNote(note.tags)
  const handleTagAdd = (tag: TTag) => saveNote(note.tags.add(tag.id))
  const handleTagDelete = (tag: TTag) => saveNote(note.tags.delete(tag.id))
  const handleTagSubmit = () => {
    handleTagAdd(createTag(tagInput))
    setTagInput("")
  }

  return (
    <>
      <ReactQuill value={text} onChange={handleTextChange} />
      <Box pt={2}>
        <TagList tags={noteTags.valueSeq()} onClick={handleTagDelete} />
        <TagInput
          value={tagInput}
          suggestions={suggestions}
          onChange={handleTagChange}
          onSubmit={handleTagSubmit}
          onSuggestionClick={handleTagAdd}
        />
      </Box>
      <button onClick={handleSave}>Save</button>
    </>
  )
}

export default Editor
