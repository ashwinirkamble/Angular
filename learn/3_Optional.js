//optional parameter
function Area(radious, PI) {
    var area;
    if (PI == undefined) {
        PI = 3.14;
    }
    area = radious * radious * PI;
    return area;
}
var iret;
iret = Area(10.0);
console.log("Area is :" + iret);
iret = Area(10.0, 7.2);
console.log("Area is :" + iret);
