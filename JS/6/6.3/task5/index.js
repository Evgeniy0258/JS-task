let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}


function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2