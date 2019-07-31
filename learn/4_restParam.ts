/* Variable number of argument*/

function display(...arr:number[])
{
  var i;
  console.log("Number of argument are :"+arr.length);
  for(i=0;i<arr.length;i++)
  {
  console.log(arr[i]);
  }
}

display(1,2,3);
display(11,21,51,101);