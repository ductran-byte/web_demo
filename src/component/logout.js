import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../App";
import { useNavigate } from "react-router-dom";
import * as giohangService from "../service/giohang";

export default function Logout() {
    const { setIsLoggedIn, setIsAdmin } = useContext(CurrentUserContext); // Lấy đúng hàm setIsLoggedIn từ context
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            // Cập nhật trạng thái đăng nhập và admin
            setIsLoggedIn(false); // Sử dụng setIsLoggedIn
            setIsAdmin(false);
            // Chuyển hướng về trang chủ
            navigate("/");
        };

        logout();
    }, [setIsLoggedIn, setIsAdmin]);

    return null;
};
