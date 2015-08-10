function  Editor() {
  this.lines = [];
}

Editor.prototype.write = function (lines) {
  this.lines.push(lines)
}

Editor.prototype.toString =  function () {
  return this.lines.join('\n');
}

module.exports = Editor;
