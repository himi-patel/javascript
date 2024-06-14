class Bike  
{  
  constructor()  
  {  
    this.company="Honda";  
  }  
}  
class Vehicle extends Bike {  
  constructor(name,price) {  
   super();  

    this.name=name;  
    this.price=price;  
  }   
}  
let a=new Vehicle ("himi","1000")
console.log(a)
// console.log(a.name+a.price+a.company)