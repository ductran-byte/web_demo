import { useEffect, useState } from "react";
import * as giohang from "../service/giohang"
import "../css/giohang.css";
import { Link } from "react-router-dom";

function Giohang() {
    const [students, setStudents] = useState([]);

    useEffect(()=> {
        const getAll = async () => {
            const result = await giohang.getAllGioHang();
            setStudents(result);
        }
        getAll();
    }, []);

    console.log(students)

    const deleteStd = async(id) => {
        const stds = await giohang.deleteGioHang(id);
        setStudents(stds);
    }

    return (
        <>
            <table style={{width:700}} border={1}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Soluong</th>
                    <th>Gia</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {students.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={() => deleteStd(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default Giohang;