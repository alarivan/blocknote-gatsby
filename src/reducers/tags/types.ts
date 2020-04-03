import { EMPTY_ACTION } from "../types"
import { Map } from "immutable"

export type TTag = {
  id: string
  color: string
}
export type TTagsState = Map<string, TTag>

export const SET_TAGS = "SET_TAGS"
export type SET_TAGS_ACTION = {
  type: typeof SET_TAGS
  payload: {
    tags: TTagsState
  }
}

export const CREATE_TAG = "CREATE_TAG"
export type CREATE_TAG_ACTION = {
  type: typeof CREATE_TAG
  tag: TTag
}

export const SAVE_TAG = "SAVE_TAG"
export type SAVE_TAG_ACTION = {
  type: typeof SAVE_TAG
  payload: {
    tag: TTag
  }
}

export const DELETE_TAG = "DELETE_TAG"
export type DELETE_TAG_ACTION = {
  type: typeof DELETE_TAG
  payload: {
    tag: TTag
  }
}

export type TTagsAction =
  | SET_TAGS_ACTION
  | CREATE_TAG_ACTION
  | SAVE_TAG_ACTION
  | DELETE_TAG_ACTION
  | EMPTY_ACTION
