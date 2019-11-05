// Drill #1 - Counting Sheep
function sheepCount(n) {
  for(let i = n; 0 <= i; i--) {
    if (i == 0) {
      console.log('All sheep jumped over the fence')
    } else {
      console.log(`${i}: Another sheep jumps over the fence.`)
    }
  }
}

//sheepCount(5)

// Drill #2 - Power Calculator
function powerCalculator(base, exp) {
  let result = 1;
  for(let i = 0; i < exp; i++) {
    result *= base
  }
  return result;
}

//console.log(powerCalculator(10, 3))

// Drill #3 - Reverse String
function reverseString(str) {
  let string = '';
  for(let i = str.length; i >= 0; i--) {
    string += str.charAt(i)
  }
  return string;
  //return str.split('').reverse().join('');
}
//console.log(reverseString('hello'))


// Drill #4 - nth Triangular Number