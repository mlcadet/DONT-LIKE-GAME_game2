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
class AlienShip {
    constructor (name, hull, firePower, accuracy) {
        this.name = name;               //use the this keyword to refer to the instance being created
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;    
    }
    attack() {
        let accuracyCheck = Math.random();  //Math.radom checking accuracy - if the attack hits the target ship based on accuracy
        if (accuracyCheck <= this.accuracy) {
            return true;
        } else {
            return false;
        }
    }
}

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


