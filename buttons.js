//print Advanced Technologies by using This

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

function AdvancedTechnologies(technology1, technology2, technology3) {

    /* Write your code here */
    this.technology1 = technology1;
    this.technology2 = technology2;
    this.technology3 = technology3;

}

/* Please do not modify anything below this line */

function main() {
    const technology1 = readLine();
    const technology2 = readLine();
    const technology3 = readLine();

    const inDemandTechnologies = new AdvancedTechnologies(technology1, technology2, technology3);

    console.log(inDemandTechnologies);
}

//print satellite names using class method

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

function Spacecraft(name) {
    this.name = name;
    /* Write your code here */
    this.launch = function () {
        console.log(`${this.name} launched`);
    };
}

/* Please do not modify anything below this line */

function main() {
    const spacecraftName = readLine();
    const spacecraft = new Spacecraft(spacecraftName);
    spacecraft.launch();
}

// /area and perimeter of rectangle

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

function Rectangle(length, breadth) {

    /* Write your code here */
    this.l = length;
    this.b = breadth;
    this.getArea = function () {
        return this.l * this.b;
    };
    this.getPerimeter = function () {
        return 2 * (this.l + this.b);
    };


}

/* Please do not modify anything below this line */

function main() {
    const l = JSON.parse(readLine());
    const b = JSON.parse(readLine());

    const rectangle = new Rectangle(l, b);

    console.log(rectangle.getArea());
    console.log(rectangle.getPerimeter());
}

///wave per hour

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


function Employee(income, workingHours) {

    /* Write your code here */
    this.income = income;
    this.workingHours = workingHours;
    this.getWagePerHour = function () {
        const wagePerHour = this.income / this.workingHours;
        return wagePerHour;
    };

}

/* Please do not modify anything below this line */

function main() {
    const income = readLine();
    const workingHours = readLine();

    const employee1 = new Employee(income, workingHours);

    console.log(employee1.getWagePerHour());
}


///bbride and groom

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

function Marriage(couple) {
    /* Write your code here */
    let { bride, groom } = couple;
    this.bride = bride
    this.groom = groom
    this.family = function () {
        console.log(`Mr & Mrs ${this.groom}`);
    };
}
/* Please do not modify anything below this line */

function main() {
    const couple = JSON.parse(readLine().replace(/'/g, '"'));

    const marriedCouple = new Marriage(couple);
    marriedCouple.family();
}


