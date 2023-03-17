function Rabbit1() { }
Rabbit1.prototype = {
    eats: true
};

let rabbit1 = new Rabbit1();

Rabbit1.prototype = {};

alert(rabbit1.eats); // true



function Rabbit2() { }
Rabbit2.prototype = {
    eats: true
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype.eats = false;

alert(rabbit2.eats); // false

function Rabbit3() { }
Rabbit3.prototype = {
    eats: true
};

let rabbit3 = new Rabbit3();

delete rabbit.eats;

alert(rabbit3.eats); // true


function Rabbit4() { }
Rabbit4.prototype = {
    eats: true
};

let rabbit4 = new Rabbit();

delete Rabbit4.prototype.eats;

alert(rabbit4.eats); // undefined