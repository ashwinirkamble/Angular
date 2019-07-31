var str:string="Pune Kothrud Marvellous Infosystems"

function ChkString( str:string)
{
  
  //var str:string = "Apples are round, and apples are juicy."; 
  var res = str.split(" ",str.length); 
  console.log(res)

 for(var i=0;i<res.length;i++)
{
 if(res[i]=="Marvellous")
 console.log("String contains Marvellous in it");
}
}

ChkString(str);
