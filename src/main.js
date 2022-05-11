const { exec } = require("child_process");
const stream = require("stream");
const fs = require("fs");
const { resolve } = require("path");

const child = exec(
  `node ${resolve(__dirname, "./problem.js")}`,
  function (err, stdout, stderr) {
    if (err !== null) {
      console.log(`\x1b[31m${err}\x1b[0m`);
    }
    console.log(`\x1b[36m${stdout}\x1b[0m`);
    console.log(`\x1b[33m${stderr}\x1b[0m`);
  }
);

const input = fs.readFileSync(resolve(__dirname, "./input.txt")).toString();

const stdinStream = new stream.Readable();
stdinStream.push(input);
stdinStream.push(null);
stdinStream.pipe(child.stdin);
