// Accessing the object properties

const obj = {
    firstName: "Ashar",
    lastName: "Ali Khan",
    age: "45",
    job: "Developer",
    Bikes: ["S1000rr", "MV Agusta"]
}

// Add anything in object, both will work fine.
obj.location = "Seattle",
obj["github"] = "Asharalikhan4"


// first way
console.log(obj.firstName);

// Second way
console.log(obj["lastName"]);

/*
Syntax	        Example	        Use Case
object.key	    car.model	      When you know the key name.
object["key"]   car["model"]	  When the key is dynamic or has spaces.
*/