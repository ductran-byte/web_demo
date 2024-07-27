import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../App";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLoggedIn, setIsAdmin } = useContext(CurrentUserContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Logic xác thực đăng nhập ở đây (ví dụ: gọi API)

        if (username === "admin" && password === "1") {
            setIsLoggedIn(true);
            setIsAdmin(true);
            navigate("/admin"); // Chuyển hướng đến trang admin nếu là admin
        } else if (username === "user" && password === "1") {
            setIsLoggedIn(true);
            navigate("/"); // Chuyển hướng đến trang chủ nếu là user
        } else {
            alert("Wrong credentials");
        }
    };

    return (
        <section>
            <div className="login-form-wrapper"></div>
            <div className="login-form">
                <h3>Đăng Nhập</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Tài Khoản"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoFocus
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Mật Khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="actions">
                        <button>Login</button>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Login;
