import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import ActionPanel from "../ActionPanel"
import * as copy from "../../../utils/copyToClipBoard"

jest.mock("../../../utils/copyToClipBoard", () => ({
  copyToClipBoard: jest.fn(),
}))

const note = { id: "something", body: "text" }

describe("ActionPanel", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<ActionPanel note={note} />)
  })

  it("calls copyToClipBoard when Copy button is clicked", () => {
    const { getByText } = render(<ActionPanel note={note} />)

    fireEvent.click(getByText("Copy"))

    expect(copy.copyToClipBoard).toHaveBeenCalledTimes(1)
  })
})
