import { render } from "@testing-library/react"
import Header from '../Header';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';

/* eslint-disable no-undef */
it("Should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
})