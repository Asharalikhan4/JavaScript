// Event Bubbling -> in this the execution is from clicked to the top
/*
-> Bydefault all the events show event bubbling
-> either you pass the third arguement as false or don't pass it.
*/

/*
document.querySelector("#grandParent").addEventListener("click", () => {
  console.log("Grand Parent Clicked!")
}, false);

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent Clicked!", false)
}, false);

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child Clicked!", false)
}, false);
*/


// Event Capturing aka Trickling -> we pass true only for the event capturing aka trickling -> in this the execution is from top to the clicked one.
document.querySelector("#grandParent").addEventListener("click", (e) => {
  console.log("Grand Parent Clicked!")
}, true);

document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("Parent Clicked!")
}, true);

document.querySelector("#child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child Clicked!")
}, true);


// to stop this propagation we use stopPropagtion() function. which is inside the event passed in callback.