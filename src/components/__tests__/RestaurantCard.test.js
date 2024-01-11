import {render} from "@testing-library/react"
import RestaurantCard from "../Card"
import {MOCK_DATA} from "./mocks/RestaurantCardMock.json"
import "@testing-library/jest-dom"


it("Should render Restaurant Card Component with props", ()=>{
    render(<RestaurantCard  resData ={MOCK_DATA}/>)

    const name = screen.getByText("Sweet Chariot")

    expect(name).toBeInTheDocument()

})