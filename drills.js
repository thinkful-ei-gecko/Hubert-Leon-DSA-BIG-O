// Drill #1 - Counting Sheep
//Complexity: Linear O(n)
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
///Complexity: Linear O(n)
function powerCalculator(base, exp) {
  let result = 1;
  for(let i = 0; i < exp; i++) {
    result *= base
  }
  return result;
}

//console.log(powerCalculator(10, 3))

// Drill #3 - Reverse String
//Complexity: Linear O(n)
function reverseString(str) {
  let string = '';
  for(let i = str.length; i >= 0; i--) {
    string += str.charAt(i)
  }
  return string;
}
//console.log(reverseString('hello'))


// Drill #4 - nth Triangular Number
//Complexity: Linear O(n)
function triangle(n) {
  let total = 0;
  for (let i=1;i<=n;i++) {
    total += i;
  }
  return total;
}

// console.log(triangle(9));

//Drill #5 - String Splitter
//Complexity: Linear O(n)
function split(string,separator) {
  let splitArray = [];
  let substring = '';
  for (let i=0; i<string.length;i++) {
    if (string[i] === separator) {
      splitArray.push(substring);
      substring = '';
    }
    else {
      if (i === string.length-1) { // if the last letter in the string
        substring += string[i];
        splitArray.push(substring);
      }
      substring += string[i];
    }
  }
  return splitArray;
}

// console.log(split('hubret leon yulia james', ' '));


//Drill #6 - Fibonacci 
//Complexity: Linear O(n)
function fib(num) {
  let result = [];
  for (let i=0; i<num; i++ ) {
    if (i === 0 || i === 1) {
      result.push(1);
    }
    else {
      result.push(result[i-1] + result[i -2]);
    }
  }
  return result;
}

// console.log(fib(13));


//Drill #7 - Factorial
//Complexity: Linear O(n)
function factorial(num) {
  let result = 1;
  for (let i = 1; i<=num; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(5));
