import React, { FormEvent, useContext, useState, ChangeEvent } from "react"
import { TextField, Box } from "@material-ui/core"
import { TagsContext } from "../../../../context/TagsContext"
import { createTagAction } from "../../../../reducers/tags/actions"
import TagList from "../TagList"
import { TTag } from "../../../../reducers/tags/types"
import { Seq } from "immutable"

interface Props {
  noteTags: Seq.Indexed<TTag>
  onTagAdd: (tag: string) => void
}

const TagsInput: React.FC<Props> = ({ noteTags, onTagAdd }) => {
  const { state, dispatch } = useContext(TagsContext)
  const [tag, setTag] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(createTagAction(tag))
    onTagAdd(tag)
    setTag("")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTag(e.target.value)

  const tagSuggestions = () => {
    if (!tag) return Seq.Indexed()

    return state
      .filter(t => t.id.startsWith(tag) && !noteTags.includes(t))
      .valueSeq()
  }

  return (
    <Box py={2}>
      <TagList tags={noteTags.valueSeq()} />
      <form onSubmit={handleSubmit}>
        <TextField value={tag} onChange={handleChange} />
      </form>
      <TagList tags={tagSuggestions()} />
    </Box>
  )
}

export default TagsInput
