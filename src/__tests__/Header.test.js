
import { render, screen } from "@testing-library/react";
import HeaderComponent from "../components/common/HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../components/utils/appStore";

it("Checking Header Component is loaded", () => {
    render(  <BrowserRouter>
            <Provider store={ store }>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>);
    // You can add an assertion here if HeaderComponent renders some text or element
    // Example: expect(screen.getByText("Header")).toBeInTheDocument();
});

it("Header should contain a logo", () => {
    render(  <BrowserRouter>
            <Provider store={ store }>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>);
    // Replace 'logo' with the actual alt text or test id used in your component
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
});

it("Header should have navigation links", () => {
    render(
        <BrowserRouter>
            <Provider store={ store }>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>
    
);
    // Replace 'Home' with actual link text present in your header
    const navLink = screen.getByText(/home/i);
    expect(navLink).toBeInTheDocument();
});

it("Header should have a search bar", () => {
    render(  <BrowserRouter>
            <Provider store={ store }>
                <HeaderComponent />
            </Provider>
        </BrowserRouter>);
    // Replace 'search' with the actual placeholder or label text
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
});

// We recommend installing an extension to run jest tests.