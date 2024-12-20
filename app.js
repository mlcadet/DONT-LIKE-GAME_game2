//Setting the Alien STUGAME object
let alienStuGame = {
    name: "Alien StuGame",
    hull: -20,
    firePower: -5,
    accuracy: -0.7,
    attack() {
        let attachChance = Math.random();
        if (attachChance <= this.accuracy) {
            return true;
        } else {
            return false:
        }
    },
};