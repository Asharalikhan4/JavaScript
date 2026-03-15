/*
-> Event Delegation is a technique to handle event in our webpage in a better way.
-> it is based on event bubbling.
-> Suppose we have an ecommerce platform and there we have alot of catrgories, and whenever we click on any category then it rdirect it to that category page,
now what they are doing it they are binding event with each categories on which when we click it redirect to that category page. this is not a good way to do cause this list can grow very long or we have infinite scroll then we keep on loading data and keep on adding events that can cause some serious performace issues. that's when event delegation comes into picture to handle this.
-> Event delegation say that in place of attaching event on each element individually we should rather attach the event to the parent of these element, where all the categories are listed.

-> Event Delegation is a design pattern where we take advantage of Event Bubbling to handle events at a higher level in the DOM than where they actually occurred.
Instead of attaching an event listener to every single child element (which is memory-intensive), we attach one single listener to a parent element.
*/

document.querySelector("#category").addEventListener("click", e => {
  console.log("clicked", e.target.id);
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});


document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e)
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
