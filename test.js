// var i = 0;

// while ( true ){
//  console.log(i);

//  if(10 == i){
//    break;
//  }
//  i++;
// } 


// var i = 10;

// while(i-- > 0){
//   console.log(i);
// }

// var i = 0;

// while(true){
//   console.log(i);

//   if(10 == i){
//     break;
//   }
//   i++;
// }

// var i = 0;

// while(i <= 10){
//   console.log(i);
//   i += 2;
// }
// const years = [];
// const currentYear = new Date().getFullYear();

// for (let i = currentYear; i < (currentYear + 6); i++){
//   years.push(i);
// }
// console.log(years)


// let total = 0, count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(total);

// for (let number = 0; number <= 12; number = number + 2){
//   console.log(number);
// }

// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//   result = result * 2;
// }console.log(result);

// for (let current = 20; ;current = current + 1){
//   if(current % 7 === 0){
//     console.log(current);
//     break;
//   }
// }

// for(let number = 0; number <= 12; number =+ 2 ){
//   console.log(number);
// }

// switch (prompt("What is the weather like?")) {
//   case "rainy":
//     console.log("Remember to bring an umbrella.");
//     break;
//   case "sunny":
//     console.log("Dress lightly.");
//   case "cloudy":
//     console.log("Go outside.");
//     break;
//   default:
//     console.log("Unknown weather type!");
//     break;
// }

// let accountBalance = calculateBalance(account);
// // It's a green hollow where a river sings
// accountBalance.adjust();
// // Madly catching white tatters in the grass.
// let report = new Report();
// // Where the sun on the proud mountain rings:
// addToReport(accountBalance, report);
// console.log(accountBalance)

// const power = function(base, exponent) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++){
//     result *= base;
//   }
//   return result;
// }
// console.log(power(2, 10));

// const light = function(x) {
//   return x * x;
// }
// console.log(light(12));

// const makeNoise = function() {
//   console.log("Pling!");
// };

// makeNoise();

// const power = function(base, exponent) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };

// console.log(power(2, 10));

// let x = 10;
// if (true) {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z)
// }
// console.log(x + z);

// const halve = function(n){
//   return n / 2
// }
// let n = 10;
// console.log(halve(100));
// console.log(n);

// const hummus = function(factor) {
//   const ingredient = function(amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };

// let launchMissiles = function() {
//   missileSystem.launch("now");
// };
// if (safeMode) {
//   launchMissiles = function() {/* do nothing */};
// }

// var i = 10;

// while (i-- > 0){
//   console.log(i)
// }

// var i = 0;
// while(i < 10) {
//   i++;
//   console.log(i);
// }


// // array sorting 
// var list = [
//   1,
//   11,
//   5,
//   15,
//   4,
//   24,
//   6
// ];

// var length = list.length-1;

// for(i=0; i<length; i++){
//   for(j=0; j<length; j++){
//     if(list[i] > list[i+1]){
//       [ list[i], list[i+1] ] = [ list[i+1], list[i] ];
//     }
//   }
// }
// console.log(list);


// let numbers = ["16", "5", "8", "11", "10", "15"];
// numbers.sort(function(a, b) {
//   return a - b;
// });

// console.log(numbers);

//var fruits = ['apple', 'orange', 'cake'];
//
//var first = fruits.length -1;
//console.log(fruits[first]);

//var list = ['Sun', 'Mon', NaN, 'Tues', 'Wed', '', 'Thu', undefined, 'Fri', null, 'Sat'];

//var count = list.length
//ulta
//for (var i = (list.length-1); i>=0; i--){
//    console.log('Element at ', i, 'offset is', list[i]);
//}

//for (var i = 0; i<count; i++){
//    console.log('Element at ', i, 'offset is', list[i]); 
//}

//var newList = [];
//var newList;

//console.log(list)

//for(i in list){
//    if(list[i]){
//        newList.push(list[i]);
//    }
//}
//newList = list.filter(Boolean)

//console.log(newList);


var list = [5, 12, 17, 11, 1, 18, 19, 25, 20]

var newLength = list.length-1;

for(var i = 0; i < newLength; i++) {
  for(var j = 0; j < newLength; j++) {
    if(list[j] > list[j+1]){
      [list[j], list[j+1]] = [list[j+1], list[j]]
    }
  }
}
console.log(list);
