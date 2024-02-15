require('./includes/scripts.js') // include the scripts used by the chapter

function dominantDirection(text) {
    // Your code here.
  }
  

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
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");
  
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
  
    return scripts.map(({name, count}) => {
      console.log(name);
      console.log(count * 100 / total);
      console.log(total);

      for (let i = 0; i < SCRIPTS.length; i++) {
        let rtlList = [];
        let ltrList = [];
        let ttbList = [];
        if (SCRIPTS[i].direction === "rtl") {
          SCRIPTS[i] = rtlList;
          
        } else if (SCRIPTS[i].direction === "ltr"){
          SCRIPTS[i] = ltrList;
        } else {
          SCRIPTS[i] = ttbList;

        }

        for (let i = 0; i < rtlList.length; i++) {
          if (name === rtlList[i]) {
            count * 100 / total;
          }
          
        }
      }


      return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
  }

  console.log(textScripts("Hey, مساء الخير"));

  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl