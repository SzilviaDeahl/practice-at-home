var Editor = require('../src/editor')

describe('Editor', function () {
  it('it adds a line to the editor', function () {
    var editor = new Editor();
    editor.write("Once upon a time at Galvanize...")
    expect(editor.lines[0]).toEqual("Once upon a time at Galvanize...");
  });

  it('an editor can accumulate multiple lines', function () {
    var editor = new Editor();
    editor.write("hello");
    editor.write("goodbye");
    editor.write("greetigns");
    expect(editor.lines.length).toEqual(3)
    editor.write("I am four!");
    expect(editor.lines.length).toEqual(4);
  } )
});
