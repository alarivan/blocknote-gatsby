import React from "react"
import { render, cleanup } from "@testing-library/react"
import Viewer from "../Viewer"

const note = { id: "something", body: "text" }

describe("Listing", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<Viewer note={note} />)
  })
})
