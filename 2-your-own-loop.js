let start;
function loop1() {
  end = 100000;
  end2 = end;
  let numList = [];

  if (end >= 1) {

    while (end >= 1) {
      numList.push(end);
      console.log(end)

      end -= 1;
    }

  }
  return (numList);
}



  function loop(num, check, update, log) {

    for (let n = num; 
      check(n);
      n = update(n)
      ) 
      
      {
        log(n)
    }





  }

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1