import {useEffect, useRef, useState} from "react";
import {addNew, getAll} from "../service/StudentService.js";
import {getAll as getClassList} from "../service/ClassService.js";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import * as Yup from "yup";

function Add(){

    const [student,setStudent] = useState({
        id: "",
        name:""
    });
    const [classList, setClassList] = useState([])
    useEffect(() => {

        // cách 1 dùng asyn/await
        const fetData = async()=>{
            setClassList(await getClassList())
        }
        fetData();

        // // cách 2 dùng promise
        // getClassList().then(data =>{
        //     setClassList(data);
        // })

    }, []);
    const navigate = useNavigate();

    const handleAdd = (value)=>{
        value ={
            ...value,
            classCG: JSON.parse(value.classCG)
        }
        console.log(value);
        const fetData = async ()=>{
            let isSuccess = await addNew(value);
            if (isSuccess){
                toast.success("Thêm mới thành công");
            }else {
                toast.error("Thêm mới thất bại")
            }
            navigate("/student");
        }
        fetData();
    }
    const validation =Yup.object({
        // id:Yup.number().required("Yêu cầu nhập id")
        //     .min(1,"Id phải là số dương"),
        name:Yup.string().required("Yêu cầu nhập tên")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"Tên không đúng định dạng"),
        classCG:Yup.string().required("Yeu cau chon lop")
    })
    return(
        <>
            <Formik initialValues={student} onSubmit={handleAdd} validationSchema={validation}>
                <Form>
                    {/*<div>*/}
                    {/*    <label>ID</label>*/}
                    {/*    <Field type ="text" name ="id"/>*/}
                    {/*    <ErrorMessage name={'id'} className={'text-danger'} component={'small'}/>*/}
                    {/*</div>*/}
                    <div>
                        <label>Name</label>
                        <Field type ="text" name ="name"/>
                        <ErrorMessage name={'name'} className={'text-danger'} component={'small'}/>
                    </div>
                    <div>
                        <Field as ={'select'} name ={'classCG'}>
                            <option value={''}>--------Chọn lớp----------</option>
                            {
                                classList.map(cls =>(
                                    <option key={cls.id} value={JSON.stringify(cls)}>{cls.name}</option>
                                ))
                            }
                        </Field>
                        <ErrorMessage name={'classCG'} className={'text-danger'} component={'small'}/>

                    </div>
                    <div>
                        <Button type={'submit'}>Lưu</Button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default Add ;