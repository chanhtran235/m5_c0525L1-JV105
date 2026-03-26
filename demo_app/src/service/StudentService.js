// gọi API

import listComponent from "../class_component/ListComponent.jsx";

const listStudent =[
    {
        id:1,
        name:"chánh",
        classCG:{
            id:1,
            name:"C05",
        }
    },
    {
        id: 2,
         name: "tiến",
        classCG:{
            id:1,
            name:"C06",
        }
    }
]

export function getAll(){
    // call API của backend
    return [...listStudent];
}
export function deleteById(id){
    for (let i = 0; i <listStudent.length ; i++) {
        if (listStudent[i].id==id){
            listStudent.splice(i,1);
            break;
        }
    }
}
export function addNew(student){
    listStudent.push(student);
}
export function findById(id){

    return listStudent.find(e=>e.id==id);
}
