import { useEffect, useState } from "react";
import * as studentService from "../service/student";
import { Link, useNavigate } from "react-router-dom";
import "../css/liststudent.css";

function ListStudent() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getAll = async () => {
            const result = await studentService.getAllStudent();
            setStudents(result);
        };
        getAll();
    }, []);

    const deleteStd = async (id) => {
        await studentService.deleteStudent(id);
        setStudents(students.filter((item) => item.id !== id));
    };

    return (
        <div className="table-container">
            <div className="button1">
                <button
                    style={{
                        backgroundColor: "#f44336",
                        color: "white",
                        padding: "10px 15px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                        margin: "5px 0",
                    }}>
                    <Link to={"/student/form"}>Thêm Sản Phẩm</Link>
                </button>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th className="th">Id</th>
                    <th className="th">Tên Sản Phẩm</th>
                    <th className="th">Giá Sản Phẩm</th>
                    <th className="th">Hình Ảnh</th>
                    <th className="th">Hành Động</th>
                </tr>
                </thead>
                <tbody>
                {students.map((item) => (
                    <tr key={item.id}>
                        <td className="td">{item.id}</td>
                        <td className="td">{item.name}</td>
                        <td className="td">{item.age}</td>
                        <td className="pic">
                            <img src={item.pic} alt={item.name}/>
                        </td>
                        <td className="action">
                            <button
                                className="button"
                                onClick={() => navigate("/student/form/" + item.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="button"
                                style={{
                                    backgroundColor: "#f44336",
                                    color: "white",
                                    padding: "10px 15px",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s",
                                    margin: "5px 0",
                                }}
                                onClick={() => deleteStd(item.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListStudent;
