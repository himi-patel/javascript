const a={
    name:"himi patel",
    age:23,
    country:"india"
}
const b={
    name1:"khushi patel",
    age2:24,
    country3:"indiana"
}
// let c=Object.assign(a,b)
// let c={...a,...b}
let {name1}=b
// console.log(name1)

if (true) {
    const username = "himi"
    if (username === "himi") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(sum(3))
function sum(num)
{
    return num+2 ;
}

const user={
    name:"vaidehi",
    age:45,
    city:"pune",
    message:function()
    {
        console.log(`hii ${this.name}`)
        
    }
}
user.message()



