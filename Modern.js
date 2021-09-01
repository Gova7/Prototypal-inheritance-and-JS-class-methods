

///TRAVEL KIT

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString.trim().split("\n").map((str) => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function Travel(kit, item) {
    this.kit = kit;
    this.item = item;
}

function main() {
    const travelBag = {
        ticket: "Hyderabad-Vizag",
        clothes: ["Shirt", "T-Shirt", "Jeans"],
        medicines: "Paracetamol",
        waterBottle: true,
        snacks: true
    };

    const item = readLine();

    const travelKit = Object.getOwnPropertyNames(travelBag);
    const travel = new Travel(travelKit, item);

    Travel.prototype.isKitContainsItems = function () {
        return this.kit.includes(this.item);
    };
    console.log(travel.isKitContainsItems());

    /* Write your code here */
}


///ARTHIMETIC OPERATIONS

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString.trim().split("\n").map((str) => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function ArithmeticOperations(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
}

function main() {
    const firstNumber = JSON.parse(readLine());
    const secondNumber = JSON.parse(readLine());

    const operation1 = new ArithmeticOperations(firstNumber, secondNumber);

    /* Write your code here */
    ArithmeticOperations.prototype.sumOfNumbers = function () {
        const product = this.firstNumber + this.secondNumber;
        return product;
    };

    ArithmeticOperations.prototype.productOfNumbers = function () {
        const difference = this.firstNumber * this.secondNumber;
        return difference;
    };
    ArithmeticOperations.prototype.differenceOfNumbers = function () {
        const difference = this.firstNumber - this.secondNumber;
        return difference;
    };


    console.log(operation1.sumOfNumbers());
    console.log(operation1.productOfNumbers());
    console.log(operation1.differenceOfNumbers());
}


/// OBJECTS WITH GIVEN SHAPE

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString.trim().split("\n").map((str) => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {

    const objectEntities = [
        {
            shape: "circle",
            color: "Green"
        },
        {
            shape: "circle",
            color: "White"
        },
        {
            shape: "triangle",
            color: "Orange"
        }
    ];

    const shape = readLine();
    /* Write your code here and log the output */
    const arrayOfObjectWithShape = [];

    for (let object of objectEntities) {
        if (object.shape === shape) {
            arrayOfObjectWithShape.push(object);
        }
    }
    console.log(arrayOfObjectWithShape);
}


///OBJECTS WITH GIVEN COLOR

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString.trim().split("\n").map((str) => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {

    const objectEntities = [
        {
            shape: "circle",
            color: "Green"
        },
        {
            shape: "circle",
            color: "White"
        },
        {
            shape: "triangle",
            color: "Orange"
        }
    ];

    const color = readLine();
    /* Write your code here and log the output */
    const arrayOfObjectsWithColor = [];

    for (let object of objectEntities) {
        if (object.color === color) {
            arrayOfObjectsWithColor.push(object);
        }
    }
    console.log(arrayOfObjectsWithColor);
}


///AIRPLANE

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString.trim().split("\n").map((str) => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function Airplane(name, inAir) {
    this.name = name;
    this.isFlying = inAir;
}

function main() {
    const airplaneName = readLine();
    const inAir = JSON.parse(readLine());

    const airplane = new Airplane(airplaneName, inAir);
    Airplane.prototype.takeOff = function () {
        this.isFlying = true;
        console.log(`${this.name} is taking off`);
    };
    Airplane.prototype.land = function () {
        this.isFlying = false;
        console.log(`${this.name} is landing`);
    };
    if (inAir === true) {
        airplane.land();
    } else {
        airplane.takeOff();
    }

    /* Write your code here */

    console.log(`Is Airplane flying? ${airplane.isFlying}`);
}

