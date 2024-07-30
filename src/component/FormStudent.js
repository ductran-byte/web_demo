import { useEffect, useState } from "react";
import * as studentService from "../service/student";
import { useNavigate, useParams } from "react-router-dom";
import "../css/formstudent.css";

function FormStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [pic, setPic] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const isAddMode = !id;



    const save = () => {
        const addStudent = async () => {
            await studentService.saveStudent(name, age, pic, id, isAddMode);
            return navigate("/admin");
        };
        addStudent();
    };

    useEffect(() => {
        if (!isAddMode) {
            const getStudent = async () => {
                const std = await studentService.getStudentById(id);
                if (std) {
                    setAge(std.age);
                    setName(std.name);
                    setPic(std.pic);
                }
            };
            getStudent();
        }
    }, []);

    return (
        <body style={{
            height: '85vh',
        }}>
        <div className="form-container">
            <input type="hidden" value={id}/>
            <input
                type="text"
                placeholder="Tên Sản Phẩm"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Giá Tiền"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nhập Link Ảnh"
                value={pic}
                onChange={(e) => setPic(e.target.value)}
            />


            <button onClick={() => save()}>Lưu</button>
        </div>
        </body>
    );
}

export default FormStudent;
