/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import { screen } from '@testing-library/react';
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
