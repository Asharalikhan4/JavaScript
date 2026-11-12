/*
# ES Module
- Introduced in ES6 (2015), ESM is the official standardized module system for both browsers and modern Node.js. 
- Loading Mechanism: It is asynchronous and uses a "static" model. The engine parses the entire dependency graph before executing any code.
- Static Analysis: Because imports are static (they must be at the top level), tools can perform Tree Shaking—automatically removing unused code to reduce bundle size.
- Strict by Default: All ES Modules automatically run in Strict Mode, which cannot be disabled.
- Interoperability: ESM can import CommonJS modules, but CommonJS generally cannot import ESM without using dynamic await import().
*/