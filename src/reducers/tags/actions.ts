import {
  SET_TAGS,
  SET_TAGS_ACTION,
  SAVE_TAG,
  SAVE_TAG_ACTION,
  DELETE_TAG,
  DELETE_TAG_ACTION,
  TTagsState,
  TTag,
} from "./types"

export function setTagsAction(tags: TTagsState): SET_TAGS_ACTION {
  return {
    type: SET_TAGS,
    payload: { tags },
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
