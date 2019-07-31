function Area(radius:number,pi:number=3.14)
{
	var area=pi*radius*radius;
	return area;
}

var ans=Area(2);
console.log("Area of circle is "+ans);

var ans=Area(2,3)
console.log("Area of circle is "+ans);

var ans=Area(5);
console.log("Area of circle is "+ans);