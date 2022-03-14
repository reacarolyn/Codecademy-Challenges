
// Objects & Method Challenges 

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
retreat(){
   console.log(retreatMessage)
}, 
  takeOff() {
  console.log('Spim... Borp... Glix... Blastoff!')
}
}
alienShip.retreat();
alienShip.takeOff();


//////////////////////////////////
// SCOPE CHALLENGE
// Training Days Project
// The scope of `random` is too loose 

const getRandEvent = () => {
const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  } 
};



// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days = '';
  if (event === 'Marathon') {
    return days = 50;
  } else if (event === 'Triathlon') {
    return days = 100;
  } else if (event === 'Pentathlon') {
    return days = 200;
  }
};

// The scope of `name` is too tight 
let name = 'Nala';
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name,days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
let name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);

//////////////////////////////////
// WHILE LOOP CHALLENGE

const cards = ['diamond', 'spade', 'heart', 'club'];
// Write your code below
for (let cards=0; cards <4; cards ++){
}
let currentCard = '';
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}  

//////////////////////////////////
//Sleep Debt Calculator Proj

//Get sleep hours each night
const getSleepHours= day => {
  switch (day){
    case 'monday': return 8;
    case 'tuesday': return 6;
    case 'wednesday': return 5; 
    case 'thursday': return 5;
    case 'friday': return 5;
    case 'saturday': return 4; 
    case 'sunday': return 5; 
  }
};
//console.log(getSleepHours('saturday'));

// Get the total sleep hours
const getActualSleepHours = () => 
 getSleepHours('monday') + 
 getSleepHours('tuesday') + 
 getSleepHours('wednesday') + 
 getSleepHours('thursday') + 
 getSleepHours('friday') + 
 getSleepHours('saturday') + 
 getSleepHours('sunday'); 

// Get the ideal sleep hours 
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours*7;
};
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

// Calculate the sleep debt
const calculateSleepDebt = () => {
  let actualSleepHours= getActualSleepHours();
  let idealSleepHours= getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("Congratulations you have met your ideal sleep goal!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("Awesome you got more sleep time than your target!");
  } else if (actualSleepHours < idealSleepHours) {
  console.log('You have ' + (idealSleepHours - actualSleepHours) + ' hours sleep debt this week. You should get more rest to be more productive.');
  }
};

calculateSleepDebt();

//////////////////////////////////
// NESTED LOOP CHALLENGE
const bobsFollowers = ['Rea', 'Ped', 'Dan', 'Dus']; 
const tinasFollowers = ['Ida', 'Ped', 'Dus'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) { 
    if (bobsFollowers[i] === tinasFollowers[j])     { 
      console.log('Both Bob and Tina has ' + mutualFollowers.push(bobsFollowers[i]));
    }
  }
};

//////////////////////////////////
// SECRET MESSAGE
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to', 'Program');
secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6,5,'know');
console.log(secretMessage.join(' '));
