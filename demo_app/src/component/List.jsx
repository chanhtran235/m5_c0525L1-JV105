
import React, {useEffect, useState} from "react";
import {getAll} from "../service/StudentService.js";
import Delete from "./Delete.jsx";
import Add from "./Add.jsx";

const List =()=>{

    const [studentList,setStudentList] = useState([])
    const [deleteStudent,setDeleteStudent] = useState({
        id:"",
        name: ""
    })
    const [isShowModal, setIsShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log("----useEffect--------")
        setStudentList([
            ...getAll()
        ])
    }, [isLoading]);
   const handleOpenModal =(student)=>{
       setDeleteStudent(student);
       setIsShowModal(true);
   }

    return(
        <>
            {console.log("---------render-----------------")}
            <Add setIsLoading ={setIsLoading} />
            <h1>Danh sách</h1>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    studentList && studentList.map((student, i) => (
                        <tr key={student.id}>
                            <td>{i+1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>
                                <button onClick={() => {
                                    handleOpenModal(student)
                                }}>Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Delete isShowModal={isShowModal}
                             deleteStudent={deleteStudent}
                    closeModal ={setIsShowModal}
                    setIsLoading = {setIsLoading}
            />
        </>
    )
}

export default List ;