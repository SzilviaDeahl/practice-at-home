var Editor = require('../src/editor')

describe('Editor', function () {
  it('it adds a line to the editor', function () {
    var editor = new Editor();
    editor.write("Once upon a time at Galvanize...")
    expect(editor.lines[0]).toEqual("Once upon a time at Galvanize...");
  });
});
