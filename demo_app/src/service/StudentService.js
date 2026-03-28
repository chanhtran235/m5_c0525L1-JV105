// gọi API

import listComponent from "../class_component/ListComponent.jsx";
import axios from "axios";

const BE_URL = "http://localhost:8080"

export async function getAll(){
    // call API của backend
    try{
        const res = await axios.get(`${BE_URL}/students`)
        return res.data;
    }catch (e){
        console.log(e)
    }
    return [];

}
export async function deleteById(id){
    try{
        const res = await axios.delete(`${BE_URL}/students/${id}`)
        if (res.status=="200"){
            return true;
        }
    }catch (e){
        console.log(e)
    }
    return false;
}
export async function addNew(student){
    try{
        const res = await axios.post(`${BE_URL}/students`,student)
        if (res.status=="201"){
            return true;
        }
    }catch (e){
        console.log(e)
    }
    return false;

}
export async function findById(id){

    try{
        const res = await axios.get(`${BE_URL}/students/${id}`)
        return res.data;
    }catch (e){
        console.log(e)
    }
    return null;
}
