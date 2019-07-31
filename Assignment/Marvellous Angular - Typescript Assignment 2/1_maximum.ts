function Maximum(arr:number[]):number
{
  //var no1:number[]=no.sort();

  var max=arr[0];

 for(var j=0;j<arr.length;j++)
 {
	if(arr[j]>max)
	max=arr[j];
	
 } 
 	return max;
}
var arr:number[]=[23,89,6,29,56,45,77,32];

var result=Maximum(arr); 
console.log("Maximum number is "+result);