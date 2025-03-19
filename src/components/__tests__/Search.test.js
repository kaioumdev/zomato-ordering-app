/* eslint-disable no-undef */
import { render } from "@testing-library/react"
import Body from "../Body"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data)
        }
    })
}
)
/* eslint-disable no-undef */
test("Should render the Body component with search", () => {
    render(<Body></Body>)
})