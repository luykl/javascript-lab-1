const myName = "Leah";
const age = "99";
const birthday = "June 31";
const detroitGC = false;
const lifeEvents = ["I was born in Michigan.", "I went to Calvin College.", "I spent 2020 at home.", "I am learning to code in 2021."];

if (detroitGC === true) {
    console.log(`My name is ${myName} and I am a student at GC in Detroit, Michigan. I am currently ${age} years old and my birthday is ${birthday}.`);
} else{
    console.log(`My name is ${myName} and I am a student at GC in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber;

while (counter < 100) {
    randomNumber = Math.floor((Math.random() * 10) + 1);
    if (randomNumber !== 5) {
        counter++;
        console.log(randomNumber + " !== 5");
    } else {
        counter++;
        console.log("5 === 5. It took " + counter + " iterations to randomly generate the number 5.");
        break;
    }


}

let hours = prompt("enter hours worked");
let wage = prompt("enter wage");
let paycheck = hours * wage;

if (hours > 40) {
    paycheck = hours * wage + (hours - 40) * wage * .5;
}

console.log("Your weekly paycheck is $" + paycheck);


let weeksToOneMillion = Math.ceil(1000000 / paycheck);
console.log("It will take you " + weeksToOneMillion + " weeks to earn $1 million.");

