var input = ["mona", "program", "application", "it", "or", "gaming", "network"]

// function findAll(input) {
//   var newArray = [];
//   for (var i = 0; i < input.length; i++) {
//     if(input[i].length < 3){
//       newArray.push(input[i])
//     }
//   }return newArray;
// }
//
// console.log(findAll(input));

function findAll(input) {
  return input.filter(function (val) {
    return val.length < 3;
  });
}
console.log(findAll(input));
