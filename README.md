# Editor - Test Driven OO Practice

## Objectives

- Turn stories into working software
- Explain the difference between state and behavior
- Identify state
- Identify behavior
- Use TDD to build out behavior and state

# Set Up
```
mkdir spec
mkdir src
```

### Testing - Getting Jasmine Wired Up

Get jasmine wired up by going to the [docs](http://jasmine.github.io/2.0/node.html) and following the set up directions.

__NOTE:__ You do not need to modify the `jasmine.json` file.

Now that you've got `jasmine` installed, let's get it wired up with a simple test that confirms everything is working as it should.

- What files will you need and where should they go?
- How does your `spec` file know about your source file?
- What is the syntax for writing a simple, single test that expects `true` to equal `true`? Where could you go to look up the syntax?

# Exercise

### Specs

Using the red, green, refactor flow, write tests for each story below. Write your tests one at a time, and only after a test is completed and passing should you move on to the next story.

#### What is the "red, green, refactor flow?

- Always watch the test fail before writing any source code to make it pass (RED).
- After you have written the source code to make the test pass (GREEN), ask yourself if there is any refactoring that can be done to make the code better
- Such as:
  - Readability: Would another developer (or future you!) be able to read your code and quickly understand what it does (variable naming, function naming)?
  - Using `forEach` or `map` instead of a `for` loop
  - Do you have functions that are bloated? Is there functionality in your code that should be extracted out into it's own function?

After any necessary refactoring, you should `add` and `commit` your work using descriptive commit messages (__HINT:__ What does that specific code accomplish? __example:__ `-m "user can add lines"`)

## Stories

### User adds lines to an editor
### #1
```
Given I have an instance of the Editor object
When I call the `write` function on that object
And pass the string `Once upon a time at Galvanize...` as an argument
Then the `lines` property of that object includes that string
```

### #2
```
Given I have an instance of the Editor object
And that instance has a `lines` property with a length of 3
And I add another line to that object
Then the length of `lines` is 4
```

### User can print all the lines of a given editor
### #3
```
When I call the `toString` function on the object
Then that object's lines are returned as a string
And each line starts with a new line (line break)
```

### User can remove lines from an editor

### #4
```
When I call the `undo` function on the object
Then the most recently added line is deleted
```
### #5
```
When I call the `undo` function multiple times in a row
Then the most recently added lines continue to be deleted
```
### #6
```
When I call the `undo` function
And the object has no lines
Then I am notified that the editor has no lines
```

### User can search lines for a given word

### #7
```
When I call the `find` function
And pass a single word as a string argument
Then the function returns a notification
And the notification states the word that was searched for
And the number of times it was found
```

### User can replace individual words of an editor's lines

### #8
```
When I call the `replace` function
And I pass a single word as the first argument
And I pass a single word as the second argument
Then each instance of the first argument in the object's lines is replaced with
the second argument
```
### #9
```
Then I receive a notification
And the notification states that the given word was replaced `n` times
```
### #10
```
When I call the `replace` function
And the given word does not exist in any lines
Then I receive a notification
And the notification states that the given word does not exist
```

## More

What other behavior or state could you add here that would be fun?
Come up with one or two of your own stories (add them to this README), then write
the tests and make them pass!
