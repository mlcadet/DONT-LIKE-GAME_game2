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
}
let alienShip = new AlienShip('ship1', 'survive');        //Create a new instance of AlienShip (AS)
console.log('alienShip: ' + alienShip.name + ' ' + alienShip.hull);

let alienShip2 = new AlienShip('ship2', 'survive');       //Static Property
console.log(alienShip.name + ' ' + alienShip2.name);





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
