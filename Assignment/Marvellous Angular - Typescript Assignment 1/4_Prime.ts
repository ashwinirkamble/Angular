function ChkPrime(no:number)
{
   for(var i=2;i<no/2;i++)
   {
   if(no%i==0)
   return false;
   }
 return true;
}

var res=ChkPrime(5);

if(res==true)
console.log("It is prime number");
else


console.log("It is prime number");