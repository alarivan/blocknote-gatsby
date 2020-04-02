import React, { Dispatch } from "react"
import { render, cleanup } from "@testing-library/react"
import Editor from "../Editor"
import { TNotesAction } from "../../../reducers/notes/types"
import { initNote } from "../../../reducers/notes/utils"

const note = initNote("text")

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
  takeRecords() {
    return []
  }
}
global.document.getSelection = function() {}

const dispatch = jest.fn()

describe("Listing", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<Editor note={note} dispatch={dispatch} />)
  })
})
