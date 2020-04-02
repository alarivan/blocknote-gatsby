import React from "react"
import { render } from "@testing-library/react"
import TagList from "./TagList"
import { Seq } from "immutable"

describe("Tag", () => {
  it("renders correctly", () => {
    const { queryByText } = render(
      <TagList tags={Seq.Indexed([{ id: "tag", color: "white" }])} />
    )

    expect(queryByText("tag")).toBeTruthy()
  })
})
