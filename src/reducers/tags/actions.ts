import {
  SET_TAGS,
  SET_TAGS_ACTION,
  SAVE_TAG,
  SAVE_TAG_ACTION,
  DELETE_TAG,
  DELETE_TAG_ACTION,
  TTagsState,
  TTag,
  CREATE_TAG_ACTION,
  CREATE_TAG,
} from "./types"
import generateColor from "../../components/utils/generateColor"

export function setTagsAction(tags: TTagsState): SET_TAGS_ACTION {
  return {
    type: SET_TAGS,
    payload: { tags },
  }
}

export function createTagAction(id: string, color?: string): CREATE_TAG_ACTION {
  return {
    type: CREATE_TAG,
    tag: {
      id,
      color: generateColor(color),
    },
  }
}

export function saveTagAction(tag: TTag): SAVE_TAG_ACTION {
  return {
    type: SAVE_TAG,
    payload: { tag },
  }
}

export function deleteTagAction(tag: TTag): DELETE_TAG_ACTION {
  return {
    type: DELETE_TAG,
    payload: { tag },
  }
}
