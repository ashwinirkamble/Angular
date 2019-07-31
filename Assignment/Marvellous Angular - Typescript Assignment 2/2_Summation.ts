function Summation(arr:number[]):number
{
var sum=0;
  for(var i=0;i<arr.length;i++)
 {
  sum=sum+arr[i];
 }
 return sum;
}

var arr:number[]=[1,2,3]
console.log("Addition is "+Summation(arr));