const classList =[
    {
        id:1,
        name:"C05",

    },
    {
        id: 2,
        name: "C06",
    },
    {
        id: 3,
        name: "C07",
    }
]

export function getAll(){
    // call API của backend
    return [...classList];
}