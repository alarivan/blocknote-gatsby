import { useContext, useMemo } from "react"
import { Seq } from "immutable"

import { TagsContext } from "../context/TagsContext"
import { TTag } from "../reducers/tags/types"

export default function useTagSuggestions(
  value: string,
  noteTags?: Seq.Indexed<TTag>
): Seq.Indexed<TTag> {
  const { state } = useContext(TagsContext)

  const predicate = (tag: TTag) => {
    if (noteTags) {
      return tag.id.startsWith(value) && !noteTags.includes(tag)
    }

    return tag.id.startsWith(value)
  }

  const suggestions = useMemo(() => {
    if (!value) return Seq.Indexed()

    return state.filter(predicate).valueSeq()
  }, [value, noteTags])

  return suggestions
}
