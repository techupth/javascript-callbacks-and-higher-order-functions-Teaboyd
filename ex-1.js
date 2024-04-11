// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  return array+operation;
}


const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function digitalwallet5000(add5K,arr,podduang){
  for (let i = 0; i<arr.length; i++){
    newEmployeeSalaries.push(add5K(arr[i],podduang));
  }
  return newEmployeeSalaries;
}
// Using `forEach` function here
const betterHappinessFrom5000 = digitalwallet5000(forEach,employeeSalaries,5000);
console.log(betterHappinessFrom5000);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
