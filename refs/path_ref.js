const path = require ('path')

console.log (__filename)
console.log(path.basename(__filename))
//The default operation of the path module varies based on the operating system on which a Node.js application is running.
console.log(path.dirname(__filename))
//The path.dirname() method returns the directory name of a path, similar to the Unix dirname command.
console.log(path.extname(__filename))
//The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path.

console.log(path.parse(__filename))
//The path.parse() method returns an object whose properties represent significant elements of the path.

console.log(path.join(__dirname, 'test', 'second.html'))
//The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
console.log(path.resolve(__dirname, './test', '/second.html'))
//The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
