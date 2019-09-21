import React from "react"
import { render, cleanup } from "@testing-library/react"
import AppPage from "../../pages/app"

// jest.mock("../../components/seo", () => {
//   return () => "SEO Mock"
// })

describe("AppPage", () => {
  afterEach(cleanup)

  it("renders correctly", () => {
    render(<AppPage />)
  })
})
