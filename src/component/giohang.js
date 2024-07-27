import { useEffect, useState } from "react";
import * as giohang from "../service/giohang";
import "../css/giohang.css";

function Giohang() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getAll = async () => {
            const result = await giohang.getAllGioHang();
            setStudents(result);
        };
        getAll();
    }, []);

    const deleteStd = async (id) => {
        await giohang.deleteGioHang(id);
        setStudents(students.filter((item) => item.id !== id));
    };

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                <tr>
                    <th className="th">Id</th>
                    <th className="th">Tên Sản Phẩm</th>
                    <th className="th">Số Lượng</th>
                    <th className="th">Giá Tiền</th>
                    <th className="th">Hành Động</th>
                </tr>
                </thead>
                <tbody>
                {students.map((item) => (
                    <tr key={item.id}>
                        <td className="td">{item.id}</td>
                        <td className="td">{item.name}</td>
                        <td className="td">{item.qty}</td>
                        <td className="td">{item.price}</td>
                        <td className="td">
                            <button className="button" onClick={() => deleteStd(item.id)}>
                                Xoá Sản Phẩm
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Giohang;
