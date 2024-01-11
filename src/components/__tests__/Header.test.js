import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../Header"
import appStore from "../../utils/Store/appStore"

describe("Header Component Test Cases", ()=>{
    it('Should render Header Component with a Login Button', ()=>{
        render(<BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>)



        const loginButton = screen.getByRole("button")

         expect(loginButton).toBeInTheDocument()
    })

    it("Should change the login button to logout on click", ()=>{
        render(<BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>)

        const loginButton = screen.getByRole("button")

        fireEvent.click(loginButton)

        const logoutButton = screen.getByRole("button", {name:'Logout'})

        expect(logoutButton).toBeInTheDocument()
    })

})



