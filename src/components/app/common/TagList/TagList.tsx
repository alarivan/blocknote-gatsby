import React from "react"
import { Seq } from "immutable"
import { TTag } from "../../../../reducers/tags/types"
import Tag from "../Tag/Tag"

interface Props {
  tags: Seq.Indexed<TTag>
  onClick: (tag: TTag) => void
}

const TagListing: React.FC<Props> = ({ tags, onClick }) => {
  return (
    <div>
      {tags.map(tag => (
        <Tag tag={tag} key={tag.id} onClick={() => onClick(tag)} />
      ))}
    </div>
  )
}

export default TagListing
