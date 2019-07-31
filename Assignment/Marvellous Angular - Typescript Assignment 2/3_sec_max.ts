function Maximum(arr:number[]):number
{
 var max1=0,max2=0;

for(var i=0;i<arr.length;i++)
{

if(arr[i] > max1)
        {
              max2 = max1;
            max1 = arr[i];
        }
        else if(arr[i] > max2 && arr[i] < max1)
        {
           
            max2 = arr[i];
        }
    }

return max2;

}

var arr:number[]=[343,12,4,1,34,1,43,23];
console.log("Second Maximum number is "+Maximum(arr));