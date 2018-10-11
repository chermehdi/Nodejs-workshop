const { createReadStream, stat, createWriteStream } = require("fs");
const fs = require("fs");
const path = require("path");

const sentence = "i am a javascript programmer";

let writeStream = createWriteStream(path.join(__dirname, "large-1.txt"));
let readStream = createReadStream(path.join(__dirname, "large.txt"));

for (let i = 0; i <= 1e7; ++i) {
  writeStream.write(sentence);
}

// copy a file the genrated file
//readStream.pipe(writeStream);

// fs.readFile(path.join(__dirname, "large.txt"), (err, content) => {
//   if (err) throw err;
//   fs.writeFile(path.join(__dirname, "large-1.txt"), content, err => {
//     if (err) throw err;
//   });
// });
