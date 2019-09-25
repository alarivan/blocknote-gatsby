import {
  TTagsState,
  TTagsAction,
  SET_TAGS,
  SAVE_TAG,
  DELETE_TAG,
} from "./types"
import { Map } from "immutable"

export const initialState: TTagsState = Map()

export function tagsReducer(state: TTagsState, action: TTagsAction) {
  switch (action.type) {
    case SET_TAGS:
      return action.payload.tags

    case SAVE_TAG:
      return state.set(action.payload.tag.id, action.payload.tag)

    case DELETE_TAG:
      return state.delete(action.payload.tag.id)

    default:
      return state
  }
}
