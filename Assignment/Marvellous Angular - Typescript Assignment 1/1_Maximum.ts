function Maximum(no1:number,no2:number,no3:number):number
{
  var max;
  if(no1>no2 && no1>no3)
	max=no1;
	
  else if(no2>no1 && no2>no3) 
	max=no2;
  else
	max=no3;

return max;
}

var sol:number;
sol=Maximum(23,89,600);

console.log("Maximum number is "+sol);