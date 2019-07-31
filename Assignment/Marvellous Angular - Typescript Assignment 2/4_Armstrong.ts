function ChkArmstrong(num:number)
{
	 var rem;
       	 var originalNumber, remainder, result = 0;

	 const digits = String(num).split('')
         const sum = digits.reduce((total, current) => {
            return total + Math.pow(parseInt(current, 10), digits.length)
}, 0)

if(sum==num)
console.log("It is Armstrong number");
else
console.log("Given Number is Not armstrong number");


}

var res=ChkArmstrong(153);
var res1=ChkArmstrong(111);


