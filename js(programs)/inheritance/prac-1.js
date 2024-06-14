class person{
    constructor()
    {
        console.log("hi")
    }
    eat()
    {
        console.log("eat")
    }
    sleep()
    {
        console.log("sleep")
    }
}

class engineer extends person{
    constructor(name)
    {
        console.log("first")
        super();
        console.log("last")
    }
    work()
    {
        console.log("work");

    }
    
}
let a=new engineer("mechanical")
console.log(a.sleep())