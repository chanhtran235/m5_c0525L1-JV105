// console.log("hello");

// // declare function
// console.log(sum(5,6));
// console.log(sum1(5,6));
// console.log(sum2(5,6));
export function sum(a,b){
    return a+b;
}
//
const sum1 =function (a,b){
    return a+b;
}
export default sum1;

// // arrow fuction
// const sum2 =(a,b)=>a+b
//
// const showMessage1 =()=>{
//     console.log("hello")
// }
export const showMessage2 = str=>{
    console.log(str)
}

// let array = [10,25,30,40];

// function compare(a,b){
//     return a-b;
// }

// array.sort((a,b)=>a-b); // alphabet
// console.log(array)
// let newArray =[]
// for (let i = 0; i <array.length ; i++) {
//     if (array[i]%2==0){
//         newArray.push(array[i])
//     }
// }
// let newArray = array.map((e)=>e*2);

// newArray = array.filter((e)=>e%2==0)
//
//
// console.log(array)
// console.log(newArray)

// array.forEach((e,i)=>{
//     console.log("pt thứ  "+i +":"+ e);
// })
//
// let arrayA = [10,20,30,56,67,678];
// let arrayB = [40,50,60];




// let arrayC =[...arrayA,...arrayB];
// // let arrayC = arrayA.map(e=>e);
//
// arrayA[0] = 100000;
//
// console.log(arrayA)
// console.log(arrayC)
//
// let student = {
//     id:1,
//     name:"chánh"
// }
//
// let student2 ={
//     ...student,
//     age:32
// }
//
// // toán tử destructuring
// const [a,b,...rest] =arrayA;
// //
// // console.log(a)
// // console.log(b)
// // console.log(rest)
//
// //
//
// // let name = student2.name;
// // let age = student2.age
//
// const{age,name} = student2
// console.log(age)
// console.log(name)

