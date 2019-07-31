function Fibonacci(no:number)
{
 var i;
 var first=0,second=1,next;
console.log(second);
do
 {
   next=first+second;
  
  console.log(next);
  first=second;
  second=next;
  
 //console.log(""+next);
 }while(next!=no);  
}

var res=Fibonacci(21);