import React from "react"
import { render, cleanup } from "@testing-library/react"
import IndexPage from "../../pages/index"

jest.mock("../../components/seo", () => {
  return () => "SEO Mock"
})

describe("IndexPage", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    const { asFragment } = render(<IndexPage />)

    expect(asFragment()).toMatchSnapshot()
  })
})
