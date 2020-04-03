import React from "react"
import { render, cleanup } from "@testing-library/react"
import Viewer from "../Viewer"
import { initNote } from "../../../reducers/notes/utils"

const note = initNote("text")

describe("Listing", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<Viewer note={note} />)
  })
})
