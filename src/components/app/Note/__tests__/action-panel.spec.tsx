import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import ActionPanel from "../ActionPanel"
import * as copy from "../../../utils/copyToClipBoard"
import { initNote } from "../../../../reducers/notes/utils"

jest.mock("../../../utils/copyToClipBoard", () => ({
  copyToClipBoard: jest.fn(),
}))

const note = initNote("text")

describe("ActionPanel", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    const { getByText } = render(<ActionPanel note={note} />)

    expect(getByText("View")).toBeTruthy()
  })

  it("calls copyToClipBoard when Copy button is clicked", () => {
    const { getByText } = render(<ActionPanel note={note} />)

    fireEvent.click(getByText("Copy"))

    expect(copy.copyToClipBoard).toHaveBeenCalledTimes(1)
  })

  it("it doesn't show View button when view is false", () => {
    const { queryByText } = render(<ActionPanel note={note} view={false} />)

    expect(queryByText("View")).toBeNull()
  })
})
