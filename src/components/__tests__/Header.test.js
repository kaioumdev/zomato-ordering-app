/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';
test("Should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button', { name: 'Login' });
    // const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();
})

it("Should load header component with a cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByText("Cart - (0 items)");
    // const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();
})

it("Should load header component with a cart ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByText(/Cart/);
    // const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();
})

test("Should change login button to logout", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button', { name: 'Logout' });
    // const loginButton = screen.getByText('Login');
    expect(logoutButton).toBeInTheDocument();
})

