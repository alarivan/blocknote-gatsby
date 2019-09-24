import React from "react"
import { render, cleanup } from "@testing-library/react"
import ActionPanel from "../ActionPanel"

const note = { id: "something", body: "text" }

describe("ActionPanel", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<ActionPanel note={note} />)
  })
})
