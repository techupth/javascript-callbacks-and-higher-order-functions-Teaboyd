//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return array(operation);
}

function zixboyd(fork,song,funk){
  const conditon = [];
  let takeoff;
  for (let i = 0;i < song.length; i++){
    if (i === 0){
      fork[i] > 50;
      takeoff = song[i];
      console.log (`นักเรียนห้องที่ ${funk} ผ่านเกณฑ์ ✅`);
    }else if (takeoff < song[i]){
      song[i] < 50;
      takeoff = song[i];
      console.log (`นักเรียนห้องที่ ${funk} ไม่ผ่านเกณฑ์ ❌`);
    }
    return conditon;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = zixboyd(studentScoresRoom1,atLeastFive);
let scoreRoom2Result = zixboyd(studentScoresRoom2,atLeastFive);
let scoreRoom3Result = zixboyd(studentScoresRoom3,atLeastFive);
