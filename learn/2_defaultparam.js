//default parameter out of 
function perc(marks, outof) {
    if (outof === void 0) { outof = 300; }
    var per = (marks / outof) * 100;
    return per;
}
var iret;
iret = perc(250);
console.log(iret);
iret = perc(250, 250);
console.log(iret);
