let name = {
  firstName: "Ashar",
  lastName: "Ali Khan"
};

let printName = function (hometown, state) {
  console.log(this.firstName + " " + this.lastName + ", " + hometown + " " + state);
};

let printMyName = printName.bind(name, "Delhi");
printMyName("Delhi 2");


// Every function has the access of bind method so if i want that every function should have access of our bind then we have to put this into function prototype


Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2])
  }
};

let printMyName2 = printName.myBind(name, "Dehradun");
printMyName2("Uttrakhand");