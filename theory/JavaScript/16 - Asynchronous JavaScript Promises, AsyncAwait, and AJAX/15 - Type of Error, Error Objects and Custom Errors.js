/*
-> Type of Error's
| Error Type     | Happens When              | Example              |
| -------------- | ------------------------- | -------------------- |
| SyntaxError    | Code structure is invalid | Missing bracket      |
| ReferenceError | Variable not defined      | `x is not defined`   |
| TypeError      | Wrong data type usage     | Calling non-function |
*/


/*
-> In JavaScript, the Error object is a built-in object that provides information about runtime errors, and custom errors are user-defined classes that inherit from the base Error class to create more specific, meaningful error types.
-> The Built-in Error Object
The JavaScript Error object is automatically generated when a runtime error occurs or can be manually instantiated using the new Error() constructor.
- Key Properties
The Error object has several useful properties:
message: A human-readable string describing the error. This is the string provided as the constructor's first argument.
name: The name of the error type (e.g., Error, TypeError, ReferenceError).
stack (non-standard): A string that provides a stack trace, showing the sequence of function calls that led to the error. This is crucial for debugging.


-> Standard Error Types
JavaScript includes several standard error constructors that inherit from the base Error class, such as:
TypeError
ReferenceError
SyntaxError
RangeError

-> Custom Errors
Custom errors allow developers to create specific error types for an application's unique needs (e.g., HttpError, DbError, ValidationError). By extending the base Error class, custom errors inherit standard properties while also allowing for additional context and functionality.
- Why Use Custom Errors?
Clarity and Debugging: Custom errors make it easier to identify exactly what went wrong in complex code.
Conditional Handling: You can use the instanceof operator to check the specific type of error and handle different scenarios accordingly in catch blocks.
Additional Context: Custom properties (like a statusCode or errorCode) can provide more information than a generic error message.
*/

//  Creating a custom Error

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message); // Call the parent Error constructor
    this.name = "CustomError"; // Set a specific name
    this.statusCode = statusCode; // Add custom properties
  }
};

try {
  throw new CustomError("A Specific Resource was not found", 404)
} catch (error) {
  if (error instanceof CustomError) {
    console.log(`Caught a custom error: ${error.name} [${error.statusCode}]: ${error.message}`);
  } else {
    console.error('Caught an unexpected error:', error.message);
  }
}
