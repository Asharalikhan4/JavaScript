/*
# CommonJs ( the old reliable)

- CommonJS was developed as the original module system for Node.js because JavaScript initially lacked a native way to manage dependencies.
- Syntax: Uses require() to import and module.exports to export.
- Loading Mechanism: It is synchronous. When you call require(), the engine stops executing the rest of the code until the required file is read and executed from the disk.
- Runtime Resolution: Imports are resolved at runtime. This means you can wrap require() in an if statement or a function, allowing for dynamic imports.
- Scope: Each module is wrapped in a function, giving it a private local scope.
- Legacy Variables: Provides built-in access to __dirname and __filename.
*/