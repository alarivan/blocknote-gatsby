import React from "react"
import { render, fireEvent } from "@testing-library/react"
import TagList from "./TagList"
import { Seq } from "immutable"

describe("Tag", () => {
  it("renders correctly and calls onClick with correct tag", () => {
    const onClick = jest.fn()
    const tag = { id: "tag", color: "white" }
    const { getByText, queryByText } = render(
      <TagList
        tags={Seq.Indexed([tag, { id: "second", color: "black" }])}
        onClick={onClick}
      />
    )

    expect(queryByText("second")).toBeTruthy()

    fireEvent.click(getByText("tag"))
    expect(onClick).toHaveBeenCalledWith(tag)
  })
})
