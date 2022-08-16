# Getting Started

## Gulpfile explained

A gulpfile is a file in your project directory titled `gulpfile.js`, that automatically loads when you run the `gulp` command.Any exported functions will be registered into gulp's task system.

## Creating Tasks

Each gulp task is an asynchronous JavaScript function - a function that accepts an error-first callback or returns a stream, promise, event emitter, child process, or observable.

To have your tasks execute in order, use the `series()` method.

For tasks to run at maximum concurrency, combine them with the `parallel()` method.

## Async Completion

Gulp tasks normalize all these types of asynchronicity(streams,promises,event emitters, child processes or observables).

### Returning a stream

```js
const { src, dest } = require("gulp")
function streamTask() {
  return src("*.js").pipe(dest("output"))
}
exports.default = streamTask
```

### Returning a promise

```js
function promiseTask() {
  return Promise.resolve("the value is ignored")
}
exports.default = promiseTask
```

## Working with Files

`src()` is given a glob to read from the file system and produces a Node Stream.
It reads them into memory to pass through the stream.

The stream produced by `src()` should be returned from a task to signal async completion.

`dest()` is given an output directory string.When it receives a file passed through the pipeline, it writes the contents out to the filesystem at a given directory.

## Explaining Globs

A glob is a string of literal used to match filepaths.

### Segments and separators

A segment is everything between separators.The separator in a glob is always the `/` character.

### Special character: \*

Matches any amount of characters within a single segment.**Useful for globbing files within one directory**
`*.js` will match files like `index.js`, but not files like `scripts/index.js`

### Special character: \*\*

**Useful for globbing files in nested directories.**
`'scripts/**/*.js'` will match files like `scripts/index.js`, `scripts/nested/index.js`
