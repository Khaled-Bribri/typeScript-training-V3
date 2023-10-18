interface AnimalConfig {
    readonly name: string;
    readonly color?: string;
}

class Animal implements AnimalConfig {
    name: string;
    color?: string;
    readonly type: string;
    readonly footNumber: number;

    constructor(theName: string, theColor?: string) {
        this.name = theName;
        this.color = theColor;
    }
}

class Cat extends Animal {
    type: string;
    footNumber: number;
    constructor(name: string, color?: string) {
        super(name, color),
        this.type = "Chat";
        this.footNumber = 4;
    }
}


class Dog extends Animal {
    type: string;
    footNumber: number;
    constructor(name: string, color?: string) {
        super(name, color),
        this.type = "Chien";
        this.footNumber = 4;
    }
}


class Bird extends Animal {
    type: string;
    footNumber: number;
    constructor(name: string, color?: string) {
        super(name, color),
        this.type = "Oiseau";
        this.footNumber = 2;
    }
}

class Fish extends Animal {
    type: string;
    footNumber: number;
    constructor(name: string, color?: string) {
        super(name, color),
        this.type = "Poisson";
        this.footNumber = 0;
    }
}

class Maggot extends Animal {
    type: string;
    footNumber: number;
    constructor(name: string, color?: string) {
        super(name, color),
        this.type = "Asticot";
        this.footNumber = 0;
    }
}


function takePicture(anAnimal: Animal) {
    if (anAnimal.type == "Oiseau" || anAnimal.type == "Poisson") {
        console.log("Vous venez de prendre en photo un/une " + anAnimal.name);
    } else {
        console.log("Vous venez de prendre en photo un/une " + anAnimal.type + " " + anAnimal.name);
    }
}

function caterwaul(anAnimal: Animal) {
    if (anAnimal.type == "Chat") {
        console.log("Le " + anAnimal.type + " " + anAnimal.name + " fait Miaou, miiiiaaaaoooouuu !");
    } else {
        console.log("Cet animal ne peut pas miauler.");
    }
    
}


function woof(anAnimal: Animal) {
    if (anAnimal.type == "Chien") {
        console.log("Le " + anAnimal.type + " " + anAnimal.name + " fait Ouaf, Ouaf Ouaf Ouaf !");
    } else {
        console.log("Cet animal ne peut pas aboyer.");
    }
}


function fly(anAnimal: Animal) {
    if (anAnimal.type == "Oiseau") {
        console.log("On peut voir voler le/la " + anAnimal.name);
    } else {
        console.log("Cet animal ne peut pas voler.");
    }
}


function swim(anAnimal: Animal) {
    if (anAnimal.type == "Poisson") {
        console.log("On peut voir nager le/la " + anAnimal.name);
    } else {
        console.log("Cet animal ne peut pas nager.");
    }
}


function giveFood(anAnimal: Animal) {
    if (anAnimal.color == "noir" && anAnimal.type != "Oiseau" && anAnimal.type != "Poisson" && anAnimal.type) {
        console.log("Vous donnez de la nourriture à un/une " + anAnimal.type + " " + anAnimal.name + " " + anAnimal.color + ".");
    } else if (anAnimal.color == "noir" && (anAnimal.type == "Oiseau" || anAnimal.type == "Poisson" || anAnimal.type == "Asticot")) {
        console.log("Vous donnez de la nourriture à un/une " + anAnimal.name + " " + anAnimal.color + ".");
    } else {
        console.log("Vous ne pouvez pas nourrir cet animal !");
    }
}

function caress(anAnimal: Animal) {
    if (anAnimal.footNumber === 4 && anAnimal.color != undefined) {
        console.log("Vous caressez un/une " + anAnimal.type + " " + anAnimal.name + " " + anAnimal.color + ".");
    } else if (anAnimal.footNumber == 4 && anAnimal.color == undefined) {
        console.log("Vous caressez un/une " + anAnimal.type + " " + anAnimal.name + ".");
    } else {
        console.log("Vous ne pouvez pas caressez cet animal !");
    }
}

let catOne: Cat = new Cat("européen", "noir");
let catTwo: Cat = new Cat("chartreux");

let dogOne: Dog = new Dog("Terre-Neuve", "noir");
let dogTwo: Dog = new Dog("Moon Moon");


let birdOne: Bird = new Bird("Mésange");
let birdTwo: Bird = new Bird("Merle", "noir");


let fishOne: Fish = new Fish("Thon");
let fishTwo: Fish = new Fish("Requin");

let insecteOne: Maggot = new Maggot("Gadget");
let insecteTwo: Maggot = new Maggot("Merlin", "noir");
