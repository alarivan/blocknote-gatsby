import React, { FormEvent, ChangeEvent } from "react"
import { Seq } from "immutable"
import { TextField, Box } from "@material-ui/core"
import { TTag } from "../../../../reducers/tags/types"
import TagList from "../TagList"

interface Props {
  value: string
  suggestions: Seq.Indexed<TTag>
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent) => void
  onSuggestionClick: (tag: TTag) => void
}

const TagInput: React.FC<Props> = ({
  value,
  suggestions,
  onChange,
  onSubmit,
  onSuggestionClick,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <Box py={2}>
      <form role="tag-form" onSubmit={handleSubmit}>
        <TextField id="tags" label="Tags" value={value} onChange={onChange} />
      </form>
      <TagList tags={suggestions} onClick={onSuggestionClick} />
    </Box>
  )
}

export default TagInput
