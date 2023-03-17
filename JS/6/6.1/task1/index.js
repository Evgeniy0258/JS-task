function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(sumTo(100));




//  Самый медленный способ
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

alert(sumTo(100));


// Самый быстрый спопсоб
function sumTo(n) {
    return n * (n + 1) / 2;
}

alert(sumTo(100));


