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

function isBalanced(s) {
  const b = s.split("");
  const openers = ["{", "[", "("];
  const closers = ["}", "]", ")"];
  for (let i = 0; i < b.length; i++) {
    if (i === b.length - 1 && !closers.includes(b[i])) {
      return "NO";
    }
    if (closers.includes(b[i])) {
      const index = closers.indexOf(b[i]);
      if (b[i - 1] !== openers[index]) {
        return "NO";
      } else {
        // remove the 2 elements
        b.splice(i - 1, 2);
        // reset the pointer
        i -= 2;
      }
    }
  }
  return "YES";
}

function main() {
  const t = readLine();
  console.log(t);
  for (let tItr = 0; tItr < t; tItr++) {
    const q = readLine();
    //.split(" ")
    //.map((qTemp) => parseInt(qTemp, 10));

    var ret = isBalanced(q);
    console.log(ret);
  }
}
