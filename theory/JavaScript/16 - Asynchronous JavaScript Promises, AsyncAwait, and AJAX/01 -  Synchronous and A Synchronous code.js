// Synchronous code
const p = document.querySelector("p");
p.textContent = "My name is Ashar Ali Khan";
alert("This is an alert"); // Code will stop here until we press ok on the alert box.
p.style.color = "red";

// Asynchronous code
const z = document.querySelector("p");
setTimeout(() => {
  p.textContent = "My name is Ashar Ali Khan"; // This code will execute after 5 seconds. here code won't stop.
}, 5000);
z.style.color = "red";
