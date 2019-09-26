import { tagsReducer } from "../reducer"
import { emptyAction } from "../../actions"
import { setTagsAction, saveTagAction, deleteTagAction } from "../actions"
import { Map } from "immutable"

describe("tagsReducer", () => {
  it("returns initials state", () => {
    const state = tagsReducer(Map(), emptyAction())

    expect(state).toEqual(Map())
  })

  it("sets tags", () => {
    const tags = Map([["fake_id", { id: "fake_id", color: "white" }]])
    const action = setTagsAction(tags)
    const state = tagsReducer(Map(), action)

    expect(state).toEqual(tags)
  })

  it("adds tag", () => {
    const tag = { id: "fake_id", color: "white" }
    const action = saveTagAction(tag)
    const state = tagsReducer(Map(), action)

    expect(state).toEqual(Map([[tag.id, tag]]))
  })

  it("deletes tag", () => {
    const tag = { id: "fake_id", color: "white" }
    const action = deleteTagAction(tag)
    const state = tagsReducer(Map([[tag.id, tag]]), action)

    expect(state).toEqual(Map())
  })
})
