//Create Math Function to generate number  ??Accuracy??
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);           //
    max = Math.floor(max);          //Math.floor() generate integer values with more control over their range
    return Math.floor(Math.random() * (max - min + 1) + min);   //Math.random() returns a pseudo-random floating-point number between 0 and 1
}                                   //The maximum is exclusive and the minimum is inclusive   
console.log(Math.ceil(3, 6));   //output 3
console.log(Math.floor(3, 6));  //output 3
console.log(getRandomIntInclusive(1, 6)) //output 2



//Initializing the DOM
const spacemanShip = document.getElementById("spaceman-ship");
const spacemanShipHull = document.getElementById("spaceman-ship-hull");
const spacemanShipAccuracy = document.getElementById("spaceman-ship-accuracy");
const aliens = document.getElementById("aliens");
const alienShipHull = document.getElementById("alien-ship-hull");
const attackBtn = document.getElementById("attachBtn");
const retreatBtn = document.getElementById("retreatBtn");
const quitBtn = document.getElementById("quitBtn");

//---------------Setting Class Ship for Spaceman ship
class Chip {
    constructor (hull, firepower, accuracy, retreatProbability) {
        this.hull = hull;
        this.firePower = firepower;
        this.accuracy = accuracy;
        this.retreatProbability = retreatProbability;
        
    }
    attack(targetShip) {
        if (Math.random() <= this.accuracy) {    //use the this keyword to refer to the instance being created
            targetShip.hull -= this.firepower;   //reduce target ship hull by firepower
            console.log("Attack successful - We survive!");
            console.log(`Target ship hull: ${targetShip.hull}`);
            
        } else {
            console.log("Attack missed!");

        }
    }
    retreat() {
        if (Math.random() < globalThis.retreatProbability) {
            this.hull += getRandomIntInclusive(1, 4);
            console.log("Retreat Retreat! Mission aborted.")
        }
    }
}


//---------------Setting the Spaceman player object
let spacemanTheDestroyer = {
    name: "SpacemanTheDestroyer",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attack(targetShip) {                             //add another property attack
        let attackChance = Math.random();  //To determine accuracy
        if (attackChance <= this.accuracy) {
            return true;
        } else {
            return false;
                }
            },
        };
    console.log('Attack Successful');


//---------------Setting USS Spaceman Assembly spaceship
// const ussAssembly = new SpacemanShip(20, 5, .7);  //not defined

                //Generate the array for the alien ships
const alienShips = [];
                //Setting the alien ships
    for (let i=0; i < 6; i++);{ 
        const hull = Math.floor(Math.random() * 4) + 3; // Random hull between 3 and 6
        const firepower = Math.floor(Math.random() * 3) + 2; // Random firepower between 2 and 4
        const accuracy = Math.random() * (0.8 - 0.6) + 0.6; // Random accuracy between 0.6 and 0.8
 
}                       //Math.floor(Math.random() * (max - min + 1) + min); 
    
//ussAssembly.attack(alienShips[0]);


//----------------- Setting the Class Alien Ship objects with constructor
class AlienShip {
    constructor () {
        this.hull = Math.floor(Math.random() * (6 - 3 + 1 )) + 3;
        this.firePower = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
        this.accuracy = Math.floor(Math.random() * (0.8 - 0.6 +1 )) + 0.6;    
    }
    attack(targetShip) {
        if (Math.random() <= this.accuracy) {    //use the this keyword to refer to the instance being created
            targetShip.hull -= this.firePower;   //reduce target ship hull by firepower
            console.log("Alien Attack!! Survived!");
            console.log(`Target ship hull: ${targetShip.hull}`);
            
        } else {
            console.log("Alien Target!!! Missed");

        }
    }
};



//Battle the alien Ships
for (let i=0; i < alienShips.length; i++) {
    const alienShip = alienShips[i];
    
    ussAssembly.attack(alienShip);      //player attack!!
    
    if (alienShip.hull <=0 ) {
        console.log("AlienShip destroyed!");
    } else {
       
        alienShip.attack(ussAssembly);  //Alien return fire!
        if (ussAssembly.hull <=0) {
            console.log("Retreat! Retreat! Mission aborted!!")
        }
    }
}




///////////// Building the Alien SpacemanShip - game object 
// let gameObject = {
//     targetShip: 0,
//     round: 0,
//     userInput: ""
// }

//Setting the array to hold Alien Spacemanship

// const alienShips = [];                      //six alien ships
// const alienHullValues = [3, 4, 5, 6];       // hullValues between 3 and 6
// const alienFirePowerValues = [2, 3, 4];     //firepower between 2 and 4
// const alienAccValues = [0.6, 0.7, 0.8];     //Accuracy between 0.6 and 0.8

// let createAlienShip = () => {
//     for (let i = 0; i < 6; i++) {
//         let name = "Alien Ship number" + (i + 1);                                   //Six alien ships
//         let hull = alienHullValues[Math.floor(Math.random() * 4) + 3];              //Random hul between 3 and 6
//         let firePower = alienFirePowerValues[Math.floor(Math.random() * 3) + 2];    //Random accuracy between 2 and 4
//         let accuracy = Math.random() * 0.2 + 0.6;                                   //Random accuracy between 0.6 and 0.8 
//         let alienShips = new Ship(name, hull, firePower, accuracy);
//         alienShips.push(alienShip);

//     }
          
// };




let alienShip = new AlienShip('ship1', 'survive');        //Create a new instance of AlienShip (AS)
console.log('alienShip: ' + alienShip.name + ' ' + alienShip.hull);


alienShip.maxHeight = 2000;  //adding property to a class

let alienShip2 = new AlienShip('ship2', 'ship2');       //Static Property or class property
console.log(alienShip.name + ' ' + alienShip2.name);
console.log(alienShip.maxHeight);




//----------------Let instantiate SpaceShip - NOT SHIP - 
            // Using "extends" keyword to inherit all methods from another class
class Ship {}
class SpaceShip extends Ship {
    
}
 let s = new SpaceShip();
console.log(s instanceof SpaceShip);


//Let instantiate ElienShip - NOT SHIP - 
class ElienShip extends Ship {
    
}
let e = new ElienShip();
console.log(e instanceof ElienShip);
console.log(e instanceof Object);



//--------------------Inheriting Constructors


 
//-------------------Using Inheriting Methods to create new ship

