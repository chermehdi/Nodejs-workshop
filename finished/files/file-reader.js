const fs = require("fs");
const path = require("path");

class FileReader {
  constructor(dir) {
    this.directory = path.resolve(dir);
  }

  list() {
    return this.walk(this.directory, {});
  }

  walk(dir, filelist, predicate) {
    let files = fs.readdirSync(dir);
    filelist = filelist || {};
    files.forEach(file => {
      if (fs.statSync(path.resolve(dir, file)).isDirectory()) {
        filelist = this.walk(path.resolve(dir, file), filelist, predicate);
      } else {
        if (!predicate || predicate(file)) {
          filelist[dir] = filelist[dir] || [];
          filelist[dir].push(file);
        }
      }
    });
    return filelist;
  }

  listFiltered(predicate) {
    return this.walk(this.directory, {}, predicate);
  }
}

module.exports = FileReader;
