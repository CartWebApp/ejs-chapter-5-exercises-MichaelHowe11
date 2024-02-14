let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.


function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
  }
  
  for (let i = 0; i < arrays.length; i++) {
    
  }
  arrays = arrays.reduce((a, current) => 
a.concat(current)
  

  );
  

  
  console.log(arrays)
// → [1, 2, 3, 4, 5, 6]