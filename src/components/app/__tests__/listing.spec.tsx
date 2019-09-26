import React from "react"
import { render, cleanup } from "@testing-library/react"
import Listing from "../Listing"
import { Seq } from "immutable"

const notes = Seq([{ id: "something", body: "text" }])

describe("Listing", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<Listing notes={notes} />)
  })
})
