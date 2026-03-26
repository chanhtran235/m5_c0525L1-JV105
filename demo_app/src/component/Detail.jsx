import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {findById} from "../service/StudentService.js";

const Detail =()=>{
    const [student,setStudent] = useState({});
    const {id} = useParams();
    useEffect(() => {
        setStudent(findById(id))
    }, []);
    return(
        <>
            <h2>Thông tin chi tiết</h2>
            <p>ID:{student?.id} </p>
            <p>Name:{student?.name} </p>
            <p>Class name: {student?.classCG?.name} </p>
        </>
    )
}
export default Detail ;