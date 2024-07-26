import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./component/router";
import "./App.css";

// Context để quản lý trạng thái đăng nhập và quyền admin
export const CurrentUserContext = createContext({
    isLoggedIn: false,
    isAdmin: false,
    setIsLoggedIn: () => {},
    setIsAdmin: () => {},
});

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <CurrentUserContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }}
        >
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <route.layout>
                                <route.component />
                            </route.layout>
                        }
                    />
                ))}
            </Routes>
        </CurrentUserContext.Provider>
    );
}

export default App;
