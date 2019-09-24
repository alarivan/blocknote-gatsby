import React from "react"
import { render, cleanup } from "@testing-library/react"
import Note from "../Note"

const note = { id: "something", body: "text" }

describe("Note", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<Note note={note} />)
  })
})
