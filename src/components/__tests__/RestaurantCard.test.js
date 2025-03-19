import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../../components/mocks/resMockData.json"
import "@testing-library/jest-dom"

/* eslint-disable no-undef */
test("Should render RestaurnatCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}></RestaurantCard>)

    const name = screen.getByText("Chinese Wok")
    expect(name).toBeInTheDocument()
})