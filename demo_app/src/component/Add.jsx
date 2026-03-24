import {useRef} from "react";
import {addNew, getAll} from "../service/StudentService.js";

function Add({setIsLoading}){
    const idRef = useRef("");
    const nameRef = useRef("");
    const handleAdd = ()=>{
        let student = {
            id: idRef.current.value,
            name:nameRef.current.value
        }
        console.log(student);
        addNew(student);
        console.log(getAll());
        setIsLoading(pre=>!pre);

    }
    return(
        <>
            <form>
                <input ref={idRef} placeholder={'Enter id'}/>
                <input ref={nameRef} placeholder={'Enter Name'}/>
                <button onClick={handleAdd}  type={'button'}>Save</button>
            </form>
        </>
    )
}
export default Add ;