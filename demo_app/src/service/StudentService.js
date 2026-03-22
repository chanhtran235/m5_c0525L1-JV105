// gọi API

import listComponent from "../component/ListComponent.jsx";

const listStudent =[
    {
        id:1,
        name:"chánh"
    },
    {
        id: 2,
         name: "tiến"
    }
]

export function getAll(){
    // call API của backend
    return listStudent;
}
export function deleteById(id){
    for (let i = 0; i <listStudent.length ; i++) {
        if (listStudent[i].id==id){
            listStudent.splice(i,1);
            break;
        }
    }
}
