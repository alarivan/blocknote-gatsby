import React from "react"
import { render, cleanup } from "@testing-library/react"
import Note from "../Note"
import { initNote } from "../../../../reducers/notes/utils"

const note = initNote("text")

describe("Note", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<Note note={note} />)
  })
})
