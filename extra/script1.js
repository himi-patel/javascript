let a=document.getElementById("btn")
a.addEventListener("mouseover",()=>
{
    document.getElementById("txt1").setAttribute("type","password")
})

a.addEventListener("mouseleave",()=>
{
    document.getElementById("txt1").setAttribute("type","text")
})

