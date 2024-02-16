const SCRIPTS = require('./includes/scripts.js');

require('./includes/scripts.js') // include the scripts used by the chapter



function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  writingDirection2 = 0;

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";
  scripts.map(({ name, count }) => {


    let writingDirection = 0;
    let rtlList = [];
    let ltrList = [];
    let ttbList = [];

    let rtlCount = 0;
    let ltrCount = 0;
    let ttbCount = 0;

    for (let i = 0; i < SCRIPTS.length; i++) {


      if (SCRIPTS[i].direction === "rtl") {
        rtlList.push(SCRIPTS[i].name)
      } else if (SCRIPTS[i].direction === "ltr") {
        ltrList.push(SCRIPTS[i].name)
      } else {
        ttbList.push(SCRIPTS[i].name)
      }


      for (let e = 0; e < rtlList.length + ltrList.length + ttbList.length; e++) {
        if (name === rtlList[e]) {
          rtlCount = rtlCount + count;
        }
        if (name === ltrList[e]) {
          ltrCount = ltrCount + count;
        }
        if (name === ttbList[e]) {
          ttbCount = ttbCount + count;
        }

      }


    }

    if (ltrCount > rtlCount) {
      writingDirection = 0;

    } else if (rtlCount > ltrCount) {
      writingDirection = 1;
    } else {
      writingDirection = 2;
    }
    writingDirection2 = writingDirection;

  });

  if (writingDirection2 === 0) {
    writingDirection2 = "ltr";
  } else if (writingDirection2 === 1) {
    writingDirection2 = "rtl";
  } else {
    writingDirection2 = "ttb";
  }

  return (writingDirection2);

}


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl