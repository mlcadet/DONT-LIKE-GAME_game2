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
   

// console.log('attack');


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
// }

class Ship {
    constructor (hull, firePower, accuracy) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;

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
}


///////////// Building the Alien SpaceShip - game object 
let gameObject = {
    targetShip: 0,
    round: 0,
    userInput: ""
}

//Setting the array to hold Alien Spaceship

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
class PlayerShip extends Ship {
    


}


class AlienShip extends Ship {
    get
}


//Setting the Alien Ship objects


