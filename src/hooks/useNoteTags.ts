import { useContext, useMemo } from "react"
import { Seq } from "immutable"
import { TTag } from "./../reducers/tags/types"
import { TNoteTags } from "../reducers/notes/types"
import { TagsContext } from "./../context/TagsContext"

export default function useNoteTags(tags: TNoteTags): Seq.Indexed<TTag> {
  const { state } = useContext(TagsContext)
  const tagItems = useMemo(
    () => Seq.Indexed((tags.map(tag => state.get(tag)) as unknown) as TTag[]),
    [tags]
  )

  return tagItems
}
