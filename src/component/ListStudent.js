import { useEffect, useState } from "react";
import * as studentService from "../service/student"
import {Link, useNavigate} from "react-router-dom";

function ListStudent() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(()=> {
        const getAll = async () => {
            const result = await studentService.getAllStudent();
            setStudents(result);
        }
        getAll();
    }, []);

    console.log(students);



    const deleteStd = async(id) => {
        const stds = await studentService.deleteStudent(id);
        setStudents(stds);
    }

    return (
        <>
            <button><Link to={"/student/form"}>Add Item</Link></button>
            <table style={{width:700}} border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <img src={item.pic} alt={item.name} />
                            </td>

                            <td>
                                <Link to={"/student/form/" + item.id}>Edit</Link>
                                ||
                                <button onClick={() => deleteStd(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ListStudent;