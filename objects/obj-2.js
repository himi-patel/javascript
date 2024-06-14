// let arr={}
// arr.name="himi"
// arr.country="india"
// arr.state="guj"

// console.log(arr)

// const user=
// {
//     name:"himi",
//     age:24,
//     user1:{
//         fullname:"khushi",
//         pincode:23,
        
//     }
// }
// console.log(user.user1.fullname)

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}

// // const obj3=Object.assign(obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3)
// console.log(Object.keys(arr))
// console.log(Object.values(arr))
// console.log(Object.entries(arr))
// console.log(user.hasOwnProperty("name1"))


// const course={
//     coursename:"js",
//     price:999,
// }
// const{coursename:course1}=course
// console.log(course1)

let arr={}
arr.name="himi"
arr.age=23,
arr.city="hmt"

console.log(arr)
console.log(arr.name)
console.log(arr.age)

let user=
{
    fname:"khushi",
    country:"india",
    user1:{
        lname:"patel",
        pin:"53645"
    }
}
console.log(user.user1.lname)


let a={
    1:"himi",
    2:"khushi",
    3:"kashish"
}
let b={
    4:"js",
    5:"ruby",
    6:"java"
}

// let c=Object.assign(a,b)
let c={...a,...b}
console.log(c)

const {fname}=user

console.log(fname)
