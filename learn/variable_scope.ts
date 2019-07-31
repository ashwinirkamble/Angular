var global=101

class Demo
{
 
//class scope
i=13;
static j=100;

fun():void
{
   //local scope 
   var local=14;
   console.log("Value of global :"+global);
   console.log("Value of local"+local);

   console.log("Value of class variable: "+Demo.j);	//static member can be accessed using class name 

   console.log("Value of Instance variable :"+this.i);
}
}