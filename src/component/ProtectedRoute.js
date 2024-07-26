// ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../App";
import Layout1 from "../layout/layout1"; // Import Layout1

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(CurrentUserContext);
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (
        <Layout1> {/* Render Layout1 để hiển thị navbar */}
            {children}
        </Layout1>
    );
};

export default ProtectedRoute;
