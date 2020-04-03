import { useContext } from "react"
import { TagsContext } from "../context/TagsContext"
import { initTag } from "../reducers/tags/utils"
import { saveTagAction } from "../reducers/tags/actions"
import { TTag } from "../reducers/tags/types"

export default function useTagDispatch() {
  const { dispatch } = useContext(TagsContext)

  const createTag = (id: string, color?: string): TTag => {
    const tag = initTag(id, color)
    dispatch(saveTagAction(tag))
    return tag
  }

  return {
    createTag,
  }
}
