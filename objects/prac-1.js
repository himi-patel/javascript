mysum=Symbol("himi")
const user=
{
    name:"himi",
    age:18,
    "country name":"india",
    id:123,
    [mysum]:"key1"

}

console.log(user.name)
// console.log(user["country"])

console.log(user["country name"])
console.log(typeof user[mysum])
console.log(user)
// Object.freeze(user)
name="vaidehi"
user.greetings=function()
{
    console.log(`hiiii good morning ${user.name}`)
}
console.log(user.greetings())