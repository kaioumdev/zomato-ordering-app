import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

/* eslint-disable no-undef */
test("Should load contact us component", () => {
    render(<Contact></Contact>)

    const heading = screen.getByRole('heading')

    expect(heading).tobeInTheDocument()
})