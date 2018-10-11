const FileReader = require("./file-reader.js");

let reader = new FileReader("../..");

/**
 * list will return a json representation of the directory that was used to construct
 * the FileReader object
 */
console.log(Object.keys(reader.list()));

// /**
//  * filter the directory file content based on the given param function
//  */
// console.log(
//   reader.listFiltered(file => {
//     return true;
//   })
// );
