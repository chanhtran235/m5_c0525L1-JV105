
import React, {useEffect, useState} from "react";
import {getAll} from "../service/StudentService.js";
import Delete from "./Delete.jsx";
import Add from "./Add.jsx";
import {Link} from "react-router";

const List =()=>{
    // Destructring
    const [studentList,setStudentList] = useState([])
    const [deleteStudent,setDeleteStudent] = useState({
        id:"",
        name: ""
    })
    const [isShowModal, setIsShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        console.log("----useEffect--------")
        setStudentList([...getAll()])
    }, [isLoading]);
   const handleOpenModal =(student)=>{
       setDeleteStudent(student);
       setIsShowModal(true);
   }

    return(
        <>
            {console.log("---------render-----------------")}
            <h1>Danh sách</h1>
            <Link to={'/student/add'}>Thêm mới</Link>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Class name</th>
                    <th>Chi tiết</th>
                    <th>Xoá</th>
                </tr>
                </thead>
                <tbody>
                {
                    studentList && studentList.map((student, i) => (
                        <tr key={student.id}>
                            <td>{i+1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.classCG?.name}</td>
                            <td>
                                <Link to={`/student/detail/${student.id}`}>Detail</Link>
                            </td>
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