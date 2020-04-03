import React from "react"
import { render, fireEvent } from "@testing-library/react"
import TagInput from "./TagInput"
import { Seq } from "immutable"

describe("TagInput", () => {
  it("renders correctly and calls event handlers", () => {
    const onSubmit = jest.fn()
    const onChange = jest.fn()
    const onSuggestionClick = jest.fn()
    const tag = { id: "tag", color: "white" }
    const { getByRole, getByText, getByLabelText } = render(
      <TagInput
        value="test"
        suggestions={Seq.Indexed([tag, { id: "second", color: "black" }])}
        onSubmit={onSubmit}
        onChange={onChange}
        onSuggestionClick={onSuggestionClick}
      />
    )

    const input = getByLabelText(/Tags/)
    expect(input).toHaveValue("test")

    fireEvent.change(input, { target: { value: "tag" } })
    expect(onChange).toHaveBeenCalledTimes(1)

    fireEvent.click(getByText("tag"))
    expect(onSuggestionClick).toHaveBeenCalledWith(tag)

    fireEvent.submit(getByRole("tag-form"))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})
