
//default parameter out of 

function perc(marks:number,outof:number=300) 
{
 var per=(marks/outof)*100;
 return per;
}

var iret:number;

iret=perc(250);
console.log(iret);

iret=perc(250,250);
console.log(iret);