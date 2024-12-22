//Create Math Function to generate number  ??Accuracy??
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);           //
    max = Math.floor(max);          //Math.floor() generate integer values with more control over their range
    return Math.floor(Math.random() * (max - min + 1) + min);   //Math.random() returns a pseudo-random floating-point number between 0 and 1
}                                   //The maximum is exclusive and the minimum is inclusive   
console.log(Math.ceil(3, 7));   //output 3
console.log(Math.floor(3, 7));  //output 3
console.log(getRandomIntInclusive(1, 6)) //output 2

//Initializing the DOM
const spacemanShip = document.getElementById("spaceman-ship");
const spacemanShipHull = document.getElementById("spaceman-ship-hull");
const spacemanShipFirePower = document.getElementById("spaceman-ship-firePower");
const spacemanShipAccuracy = document.getElementById("spaceman-ship-accuracy");
const alienShip = document.getElementById("alien-ship");
const alienShipHull = document.getElementById("alien-ship-hull");
const attackBtn = document.getElementById("attachBtn");
const retreatBtn = document.getElementById("retreatBtn");
const quitBtn = document.getElementById("quitBtn");

//Setting Class Ship for Spaceman ship
class Ship {
    constructor (hull, firePower, accuracy, retreatProbability) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
        this.retreatProbability = retreatProbability;
        
    }
    attack(targetShip) {
        if (Math.random() <= this.accuracy) {    //use the this keyword to refer to the instance being created
            targetShip.hull -= this.firePower;   //reduce target ship hull by firepower
            console.log("Attack successful!");
            console.log(`Target ship hull: ${targetShip.hull}`);
            
        } else {
            console.log("Attack missed!");

        }
    }
    retreat() {
        if (Math.random() < globalThis.retreatProbability) {
            this.hull += getRandomIntInclusive(1, 4);
        }
    }
}


//Setting the Alien STUGAME object
let alienStuGame = {
    name: "Alien StuGame",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    isAlive: true,
    attack() {                             //add another property attack
        let attackChance = Math.random();  //To determine accuracy
        if (attackChance <= this.accuracy) {
            return true;
        } else {
            return false;
                }
            },
        };
console.log('attack');


//Setting the Class Alien Ship objects with constructor
// class AlienShip {
//     constructor (name, hull, firePower, accuracy) {
//         this.name = name;               //use the this keyword to refer to the instance being created
//         this.hull = hull;
//         this.firePower = firePower;
//         this.accuracy = accuracy;    
//     }
//     attack() {
//         let accuracyCheck = Math.random();  //Math.radom checking accuracy - if the attack hits the target ship based on accuracy
//         if (accuracyCheck <= this.accuracy) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }, 





///////////// Building the Alien SpacemanShip - game object 
let gameObject = {
    targetShip: 0,
    round: 0,
    userInput: ""
}

//Setting the array to hold Alien Spacemanship

const alienShips = [];                      //six alien ships
const alienHullValues = [3, 4, 5, 6];       // hullValues between 3 and 6
const alienFirePowerValues = [2, 3, 4];     //firepower between 2 and 4
const alienAccValues = [0.6, 0.7, 0.8];     //Accuracy between 0.6 and 0.8

let createAlienShip = () => {
    for (let i = 0; i < 6; i++) {
        let name = "Alien Ship number" + (i + 1);                                   //Six alien ships
        let hull = alienHullValues[Math.floor(Math.random() * 4) + 3];              //Random hul between 3 and 6
        let firePower = alienFirePowerValues[Math.floor(Math.random() * 3) + 2];    //Random accuracy between 2 and 4
        let accuracy = Math.random() * 0.2 + 0.6;                                   //Random accuracy between 0.6 and 0.8 
        let alienShips = new Ship(name, hull, firePower, accuracy);
        alienShips.push(alienShip);

    }
          
};




// let alienShip = new AlienShip('ship1', 'survive');        //Create a new instance of AlienShip (AS)
// console.log('alienShip: ' + alienShip.name + ' ' + alienShip.hull);


// alienShip.maxHeight = 2000;  //adding property to a class

// let alienShip2 = new AlienShip('ship2', 'ship2');       //Static Property or class property
// console.log(alienShip.name + ' ' + alienShip2.name);
// console.log(alienShip.maxHeight);





//Using "extends" keyword to inherit all methods from another class
class SpacemanShipShip extends Ship {
    


}


class AlienShip extends Ship {
    get
}


//Setting the Alien Ship objects


