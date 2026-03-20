// gọi API

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
    return [...listStudent];
}