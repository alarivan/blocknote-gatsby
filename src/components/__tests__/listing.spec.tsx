import React from "react"
import { render, cleanup } from "@testing-library/react"
import Listing from "../Listing"

const notes = [{ id: "something", body: "text" }]

describe("Listing", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<Listing notes={notes} />)
  })
})
