import { useEffect, useState } from "react";
import * as studentService from "../service/student";
import { useNavigate, useParams } from "react-router-dom";

function FormStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [pic, setPic] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const isAddMode = !id;



    const save = () => {
        const addStudent = async () => {
            await studentService.saveStudent(name, age, pic, id, isAddMode); // Pass image
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
                    setPic(std.pic); // Set existing image if editing
                }
            };
            getStudent();
        }
    }, []);

    return (
        <>
            <input type="hidden" value={id}/>
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="text"
                placeholder="Your picture"
                value={pic}
                onChange={(e) => setPic(e.target.value)}
            />


            <button onClick={() => save()}>Save</button>
        </>
    );
}

export default FormStudent;
