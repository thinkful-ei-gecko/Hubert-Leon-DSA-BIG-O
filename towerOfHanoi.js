function hanoi(num, source, temp, dest) {
  if (num === 1) {
    console.log(source, '->', dest)
    return;
  }
  if (num == 2) {
    
    hanoi(num - 1, source, temp, dest)
    console.log(source, '->', temp)
    hanoi(num - 1, temp, dest, source)
    
  }
}

console.log(hanoi(2, 'a', 'b', 'c'))