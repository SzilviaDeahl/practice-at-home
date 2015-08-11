var input = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, "r", 10, 11, 12, 13, 14, 15, 16, 17]

function any (input) {
  for (var i = 0; i < input.length; i++) {
    if(input[i] % 3 === 0){
      return true;
      break;
    }
  } return input[i]
}
any(input);


function any(input) {
  var result = false;
  input.forEach(function (num) {
    if(num % 3 === 0){
      result = true;
    }
  });
  return result;
}
console.log(any(input));
