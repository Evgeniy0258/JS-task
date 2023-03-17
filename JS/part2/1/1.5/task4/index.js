alert(document); //  объект класса HTMLDocument.


alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document занимает 2 место, наследует от HTMLDocument
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node