/* eslint-disable no-undef */
import { render } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../../components/mocks/mockResListsData.json"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
}
)
/* eslint-disable no-undef */
test("Should render the Body component with search", () => {
    render(<Body></Body>)
})