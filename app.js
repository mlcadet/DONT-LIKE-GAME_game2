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
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;

        console.log('name:' + name)
    }
}
let alienShip = new AlienShip();        //Create a new instance of AlienShip (AS)


//Setting the Alien Ship objects







// attack() {
//     let attackChance = Math.random();  //To determine accuracy
//     if (attackChance <= this.accuracy) {
//         return true;
//     } else {
//         return false;
//             }
//         },
//     };
