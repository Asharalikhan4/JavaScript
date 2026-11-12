function A() {
  // Using arguements.callee is highly discouraged and completely banned in JS in strict mode.
  if ((this instanceof arguments.callee)) {
    console.log("OK, new");
  } else {
    console.log("OK, function");
  }
};

/*
Testing
*/

var Z = new A();
Z.lolol = A;
Z.lolol();