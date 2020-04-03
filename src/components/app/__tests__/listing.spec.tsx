import React from "react"
import { render, cleanup } from "@testing-library/react"
import { Seq } from "immutable"
import Listing from "../Listing"
import { initNote } from "../../../reducers/notes/utils"

const notes = Seq([initNote("text")])

describe("Listing", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<Listing notes={notes} />)
  })
})
