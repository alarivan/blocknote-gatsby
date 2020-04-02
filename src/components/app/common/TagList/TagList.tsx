import React from "react"
import { Seq } from "immutable"
import { TTag } from "../../../../reducers/tags/types"
import Tag from "../Tag/Tag"

interface Props {
  tags: Seq.Indexed<TTag>
}

const TagListing: React.FC<Props> = ({ tags }) => {
  return (
    <div>
      {tags.map(tag => (
        <Tag tag={tag} key={tag.id} />
      ))}
    </div>
  )
}

export default TagListing
