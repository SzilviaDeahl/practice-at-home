var input = ["mona", "program", "application", "it", "or", "gaming", "network"]

function getIndex(input, val) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === val){
      return i;
      break;
    }
  }
}
console.log(getIndex(input, 'gaming'));
