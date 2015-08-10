function  Editor() {
  this.lines = [];
}

Editor.prototype.write = function (lines) {
  this.lines.push(lines)
}

module.exports = Editor;
