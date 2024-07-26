import {db} from "./dexie";

const saveStudent = async (name, age, pic, id, isAddMode) => {
    if (isAddMode) {
        db.student.add({name, age, pic, id});
    } else {
        db.student.update(parseInt(id), {name, age, pic});
    }
}


const getAllStudent = async () => {
    return await db.student.toArray();
}

const deleteStudent = async (id) => {
    db.student.delete(parseInt(id));
    return await db.student.toArray();
}
 
const getStudentById = async (id) => {
    return await db.student.get(parseInt(id));
}
export {saveStudent,getAllStudent,getStudentById,deleteStudent}

