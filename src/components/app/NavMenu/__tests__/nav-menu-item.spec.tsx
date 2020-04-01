import React from "react"
import { render, cleanup } from "@testing-library/react"
import NavMenuItem from "../Item"

describe("NavMenuItem", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    const { container, queryByText } = render(
      <NavMenuItem to="test">content</NavMenuItem>
    )

    expect(container.querySelector("a")).toHaveAttribute("href", "test")
    expect(queryByText("content")).toBeTruthy()
  })
})
