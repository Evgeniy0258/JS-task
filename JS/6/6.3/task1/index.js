function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // ?
alert(counter2()); // ?




//  0,1.

// так как функции counter и counter2 вызываются разными  makeCounter, поэтому у них независимые внешние лексические окружения,
// у каждого из которых свой собственный count.

