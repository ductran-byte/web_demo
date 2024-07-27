import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/layout1.css";
import { CurrentUserContext } from "../App";

function Layout1({ children }) {
    const { isLoggedIn, isAdmin } = useContext(CurrentUserContext);

    return (
        <Fragment>

            <ul className="nav">
                <li>
                    <Link to="/">Trang Chủ</Link>
                </li>
                <li>
                    <Link to="/giohang">Giỏ Hàng</Link>
                </li>
                {!isLoggedIn ? (
                    <li>
                        <Link to="/login">Đăng Nhập</Link>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/logout">Đăng Xuất</Link>
                        </li>
                        {isAdmin && (
                            <li>
                                <Link to="/admin">Quản Trị</Link>
                            </li>
                        )}
                    </>
                )}
            </ul>

            {children}
        </Fragment>
    );
}

export default Layout1;
