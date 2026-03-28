import axios from "axios";

const BE_URL = "http://localhost:8080"

export async function getAll(){
    // call API của backend
    try{
        const res = await axios.get(`${BE_URL}/classes`)
        return res.data;
    }catch (e){
        console.log(e)
    }
    return [];

}