import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
/* eslint-disable no-undef */

describe("Contact component", () => {
    test("Should load contact us component", () => {
        render(<Contact />)

        const heading = screen.getByRole('heading')

        expect(heading).toBeInTheDocument()
    })

    test("Should load button inside contact component", () => {
        render(<Contact />)

        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    test("Should load button inside contact component", () => {
        render(<Contact />)

        const button = screen.getByText('Submit')

        expect(button).toBeInTheDocument()
    })

    test("Should load input name inside contact component", () => {
        render(<Contact />)

        const input = screen.getByPlaceholderText('Name')

        expect(input).toBeInTheDocument()
    })

    test("Should load input element inside contact component", () => {
        render(<Contact />)

        const inputBoxes = screen.getAllByRole('textbox')

        expect(inputBoxes.length).toBe(2)
    })
})

