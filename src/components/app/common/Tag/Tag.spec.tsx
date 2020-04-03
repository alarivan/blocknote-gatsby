import React from "react"
import { render } from "@testing-library/react"
import Tag from "./Tag"

describe("Tag", () => {
  it("renders correctly", () => {
    const { queryByText } = render(<Tag tag={{ id: "tag", color: "white" }} />)

    expect(queryByText("tag")).toBeTruthy()
  })
})
