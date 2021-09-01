///laptop

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

class Laptop {
    constructor(color, brand, battery, notifications, turnOn) {
        this.color = color;
        this.brand = brand;
        this.battery = battery;
        this.notifications = notifications;
        this.isTurnOn = turnOn;
    }

    turnOn() {
        this.isTurnOn = true;
    }

    turnOff() {
        this.isTurnOn = false;
    }

    /* Write your code here */

}

/* Please do not modify anything below this line */

function main() {
    const color = readLine();
    const brand = readLine();
    const battery = parseInt(readLine());
    const notifications = parseInt(readLine());
    const turnOn = JSON.parse(readLine());

    const laptop1 = new Laptop(color, brand, battery, notifications, turnOn);

    console.log(laptop1.isTurnOn); // As Laptop is not yet turned on, it should print false.
    laptop1.turnOn(); //The Laptop is turned on.
    console.log(laptop1.isTurnOn); // As Laptop is turned on, it should print true.
    laptop1.turnOff(); //The Laptop is turned off.
    console.log(laptop1.isTurnOn) // As Laptop is turned on, it should print false.
}


/////////LAPTOP SPECIFICATIONS

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

class Laptop {
    constructor(color, brand, battery, notifications) {
        this.color = color;
        this.brand = brand;
        this.battery = battery;
        this.notifications = notifications;

    }

    /* Write your code here */

}

/* Please do not modify anything below this line */

function main() {
    const color = readLine();
    const brand = readLine();
    const battery = parseInt(readLine());
    const notifications = parseInt(readLine());

    const laptop1 = new Laptop(color, brand, battery, notifications);

    console.log(laptop1.color);
    console.log(laptop1.brand);
    console.log(laptop1.battery);
    console.log(laptop1.notifications);
}

//LAPTOP CHARGING

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

class Laptop {
    constructor(color, brand, battery, notifications) {
        this.color = color;
        this.brand = brand;
        this.battery = battery;
        this.notifications = notifications;
        this.isTurnOn = false;
    }

    turnOn() {
        this.isTurnOn = true;
    }

    turnOff() {
        this.isTurnOn = false;
    }

    charging() {
        if (this.battery < 100) {
            this.battery = 100;
            console.log(`Laptop Charged ${this.battery}%`)
        } else {
            console.log(`Laptop Fully Charged`);
        }
    }

    /* Write your code here */

}

/* Please do not modify anything below this line */

function main() {
    const color = readLine();
    const brand = readLine();
    const battery = parseInt(readLine());
    const notifications = parseInt(readLine());

    const laptop1 = new Laptop(color, brand, battery, notifications);

    laptop1.turnOn(); // The Laptop Turned On.

    console.log(`Laptop Charged ${laptop1.battery}%`); // The Laptop battery charged percentage.

    laptop1.charging(); // The Laptop charging.
}

////LAPTOP CHARGING REMOVAL

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((str) => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* Please do not modify anything above this line */

class Laptop {
    constructor(color, brand, battery, notifications) {
        this.color = color;
        this.brand = brand;
        this.battery = battery;
        this.notifications = notifications;
        this.isTurnOn = false;
    }

    turnOn() {
        this.isTurnOn = true;
    }

    turnOff() {
        this.isTurnOn = false;
    }

    removeCharging() {
        console.log("Please remove charger");
    }

    /* Write your code here */

    charging() {
        if (this.battery < 100) {
            this.battery = 100;
            console.log(`Laptop Charged ${this.battery}%`);
        } else {
            console.log(`Laptop Fully Charged`);
            this.removeCharging();
            /* Write your code here */
        }
    }
}

/* Please do not modify anything below this line */

function main() {
    const color = readLine();
    const brand = readLine();
    const battery = parseInt(readLine());
    const notifications = parseInt(readLine());

    const laptop1 = new Laptop(color, brand, battery, notifications);

    laptop1.turnOn(); // Laptop Turned On

    console.log(`Laptop Charged ${laptop1.battery}%`); // Laptop battery charged percentage.

    laptop1.charging(); // Laptop charging
}


///LAPTOP NOTIFICATIONS


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

class Laptop {
    constructor(color, brand, battery, notifications) {
        this.color = color;
        this.brand = brand;
        this.battery = battery;
        this.notifications = notifications;
        this.isTurnOn = false;
    }

    turnOn() {
        this.isTurnOn = true;
    }

    turnOff() {
        this.isTurnOn = false;
    }
    /* Write your code here */
    message() {
        console.log("You got a message");
    }
    getNotification() {
        this.notifications = this.notifications + 1;
        console.log(`You have ${this.notifications} notifications`);
    }
    clearNotifications() {
        this.notifications = 0;
        console.log("Notifications are cleared");
    }

}

/* Please do not modify anything below this line */

function main() {
    const color = readLine();
    const brand = readLine();
    const battery = parseInt(readLine());
    const notifications = parseInt(readLine());

    const laptop1 = new Laptop(color, brand, battery, notifications);

    laptop1.turnOn(); //The Laptop is turned on.
    laptop1.getNotification(); // Increment the notifications by 1.
    laptop1.message(); // 'You got a message' will be logged.
    laptop1.getNotification(); // Increment the notifications by 1.
    laptop1.clearNotifications(); // 'Notifications are cleared' will be logged.
}

///

TIGER

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

class Animal {
    constructor(species) {
        this.species = species;
    }

    /* Write your code here */
    eat() {
        console.log(`${this.species} is eating`);
    }
}

class Tiger extends Animal {
    constructor(species, age) {
        super(species);
        this.age = age;
    }

    hunt() {
        console.log(`A ${this.age} years old ${this.species} is hunting`);
    }

    roar() {
        console.log(`${this.species} is roaring`);
    }
}

/* Please do not modify anything below this line */

function main() {
    const species = readLine();
    const age = parseInt(readLine());

    const tiger1 = new Tiger(species, age);

    tiger1.eat();
}

////FIGHTER JETS


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

class Aircraft {
    constructor() {
        this.flying = false;
    }

    takeOff() {
        this.flying = true;
    }

    land() {
        this.flying = false;
    }
}

class FighterJet extends Aircraft {
    constructor(missilesLoaded, missilesFired) {
        super();
        this.missiles = missilesLoaded;
        this.missilesFired = missilesFired;
    }
    fireMissiles() {
        this.missiles = this.missiles - this.missilesFired;
        console.log(`${this.missilesFired} Missiles Fired`);
    }

    /* Write your code here */

}

/* Please do not modify anything below this line */

function main() {
    const missilesLoaded = parseInt(readLine());
    const missilesFired = parseInt(readLine());

    const fighterJet = new FighterJet(missilesLoaded, missilesFired);

    fighterJet.takeOff();
    fighterJet.fireMissiles();
    console.log(`${fighterJet.missiles} Missiles Left`);
    fighterJet.land();
}