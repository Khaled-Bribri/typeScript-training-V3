var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName, theColor) {
        this.name = theName;
        this.color = theColor;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color) {
        var _this = this;
        _this = _super.call(this, name, color) || this,
            _this.type = "Chat";
        _this.footNumber = 4;
        return _this;
    }
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        var _this = this;
        _this = _super.call(this, name, color) || this,
            _this.type = "Chien";
        _this.footNumber = 4;
        return _this;
    }
    return Dog;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, color) {
        var _this = this;
        _this = _super.call(this, name, color) || this,
            _this.type = "Oiseau";
        _this.footNumber = 2;
        return _this;
    }
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, color) {
        var _this = this;
        _this = _super.call(this, name, color) || this,
            _this.type = "Poisson";
        _this.footNumber = 0;
        return _this;
    }
    return Fish;
}(Animal));
var Maggot = /** @class */ (function (_super) {
    __extends(Maggot, _super);
    function Maggot(name, color) {
        var _this = this;
        _this = _super.call(this, name, color) || this,
            _this.type = "Asticot";
        _this.footNumber = 0;
        return _this;
    }
    return Maggot;
}(Animal));
function takePicture(anAnimal) {
    if (anAnimal.type == "Oiseau" || anAnimal.type == "Poisson") {
        console.log("Vous venez de prendre en photo un/une " + anAnimal.name);
    }
    else {
        console.log("Vous venez de prendre en photo un/une " + anAnimal.type + " " + anAnimal.name);
    }
}
function caterwaul(anAnimal) {
    if (anAnimal.type == "Chat") {
        console.log("Le " + anAnimal.type + " " + anAnimal.name + " fait Miaou, miiiiaaaaoooouuu !");
    }
    else {
        console.log("Cet animal ne peut pas miauler.");
    }
}
function woof(anAnimal) {
    if (anAnimal.type == "Chien") {
        console.log("Le " + anAnimal.type + " " + anAnimal.name + " fait Ouaf, Ouaf Ouaf Ouaf !");
    }
    else {
        console.log("Cet animal ne peut pas aboyer.");
    }
}
function fly(anAnimal) {
    if (anAnimal.type == "Oiseau") {
        console.log("On peut voir voler le/la " + anAnimal.name);
    }
    else {
        console.log("Cet animal ne peut pas voler.");
    }
}
function swim(anAnimal) {
    if (anAnimal.type == "Poisson") {
        console.log("On peut voir nager le/la " + anAnimal.name);
    }
    else {
        console.log("Cet animal ne peut pas nager.");
    }
}
function giveFood(anAnimal) {
    if (anAnimal.color == "noir" && anAnimal.type != "Oiseau" && anAnimal.type != "Poisson" && anAnimal.type) {
        console.log("Vous donnez de la nourriture à un/une " + anAnimal.type + " " + anAnimal.name + " " + anAnimal.color + ".");
    }
    else if (anAnimal.color == "noir" && (anAnimal.type == "Oiseau" || anAnimal.type == "Poisson" || anAnimal.type == "Asticot")) {
        console.log("Vous donnez de la nourriture à un/une " + anAnimal.name + " " + anAnimal.color + ".");
    }
    else {
        console.log("Vous ne pouvez pas nourrir cet animal !");
    }
}
function caress(anAnimal) {
    if (anAnimal.footNumber === 4 && anAnimal.color != undefined) {
        console.log("Vous caressez un/une " + anAnimal.type + " " + anAnimal.name + " " + anAnimal.color + ".");
    }
    else if (anAnimal.footNumber == 4 && anAnimal.color == undefined) {
        console.log("Vous caressez un/une " + anAnimal.type + " " + anAnimal.name + ".");
    }
    else {
        console.log("Vous ne pouvez pas caressez cet animal !");
    }
}
var catOne = new Cat("européen", "noir");
var catTwo = new Cat("chartreux");
var dogOne = new Dog("Terre-Neuve", "noir");
var dogTwo = new Dog("Moon Moon");
var birdOne = new Bird("Mésange");
var birdTwo = new Bird("Merle", "noir");
var fishOne = new Fish("Thon");
var fishTwo = new Fish("Requin");
var insecteOne = new Maggot("Gadget");
var insecteTwo = new Maggot("Merlin", "noir");
