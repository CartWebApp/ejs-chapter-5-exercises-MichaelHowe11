let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.


  arrays = arrays.reduce((a, current) => 
a.concat(current)
  );
  

  
  console.log(arrays)
// → [1, 2, 3, 4, 5, 6]