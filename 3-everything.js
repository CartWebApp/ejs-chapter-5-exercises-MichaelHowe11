function every(array, test) {
sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = array[i] + array[i-1];
  }
  return(test(sum))
}
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
