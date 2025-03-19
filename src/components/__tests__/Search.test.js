/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../../components/mocks/mockResListsData.json"
// import { act } from "react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
}
)
/* eslint-disable no-undef */
test("Should render the Body component with search", async () => {
    await act(async () => render(<BrowserRouter><Body></Body></BrowserRouter>))

    const searchBtn = screen.getByRole('button', { name: 'Search' })
    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, { target: { value: 'burger' } })
    fireEvent.click(searchBtn)

    //Screen should 4 res cards
    const cards = screen.getAllByTestId('resCard')
    expect(cards.length).toBe(7)
})