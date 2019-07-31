/* Variable number of argument*/
function display() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var i;
    console.log("Number of argument are :" + arr.length);
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
display(1, 2, 3);
display(11, 21, 51, 101);
