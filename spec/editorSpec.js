var Editor = require('../src/editor')
var editor;

describe('Editor', function () {
  beforeEach(function () {
    editor = new Editor();
    editor.write("hello");
    editor.write("goodbye");
    editor.write("greetings");
  });
  describe('#write', function () {
    it('it adds a line to the editor', function () {
      editor.write("Once upon a time at Galvanize...")
      expect(editor.lines[3]).toEqual("Once upon a time at Galvanize...");
    });

    it('an editor can accumulate multiple lines', function () {
      expect(editor.lines.length).toEqual(3)
      editor.write("I am four!");
      expect(editor.lines.length).toEqual(4);
    });
  });
  describe('#toString', function () {
    it('returns the lines as a string', function () {
      var expected = "hello\ngoodbye\ngreetings";
      expect(editor.toString()).toEqual(expected)
    })
  })

})
