import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import CopyButton from "../CopyButton"

describe("CopyButton", () => {
  afterEach(cleanup)

  it("renders correctly, then calls onClick", () => {
    const onClick = jest.fn()
    const { getByText } = render(<CopyButton onClick={onClick} />)

    fireEvent.click(getByText("Copy"))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
