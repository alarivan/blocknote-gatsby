import React from "react"
import { render, cleanup } from "@testing-library/react"
import ActionPanel from "../ActionPanel"

const noteRef = { current: null }

const note = { id: "something", body: "text" }

describe("ActionPanel", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    const { getByText } = render(<ActionPanel noteRef={noteRef} note={note} />)

    expect(getByText("View")).toBeTruthy()
  })

  it("it doesn't show View button when view is false", () => {
    const { queryByText } = render(
      <ActionPanel noteRef={noteRef} note={note} view={false} />
    )

    expect(queryByText("View")).toBeNull()
  })
})
