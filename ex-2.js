//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let room = 0;
  for (let i = 0; i < array.length; i++){
    if (operation(array[i])){
      room++;
    }
  }
  return room >=5;
}

function CheckQuality70(tamb){
  return tamb > 70;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,CheckQuality70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,CheckQuality70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,CheckQuality70);

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)