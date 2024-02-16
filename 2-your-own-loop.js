
function loop(num, check, update, log) {

  for (let n = num;
    check(n);
    n = update(n)
  ) {
    log(n)
  }





}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1