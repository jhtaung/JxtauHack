"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function pairs(k, arr) {
  const s = new Set(arr);
  return arr.reduce((ac, v) => s.has(v - k) ? ac + 1: ac, 0);
  /*
  var ret = 0;
  var matches = [];
  for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 1; j < arr.length; j++) {
          var diff = arr[i] - arr[j];
          diff = diff < 0 ? diff * -1 : diff;
          if (diff !== k) continue;
          var temp = [arr[i], arr[j]];
          temp.sort();
          var tempStr = temp.join('');
          if (matches.includes(tempStr)) {
              continue;
          }
          matches.push(tempStr);
          ret++;
      }
  }
  return ret;
  */
}

function main() {
  const t = readLine();
  console.log(t);
  for (let tItr = 0; tItr < t; tItr++) {
    const q = readLine();
    //.split(" ")
    //.map((qTemp) => parseInt(qTemp, 10));

    
    console.log(ret);
  }

  // var ret = pairs(q);
}
