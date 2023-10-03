const neighbours = ["Norway", "Russia", "Sweden"];

neighbours.push("Utopia");

neighbours.pop();

if(neighbours.includes("Germany")){
    console.log("Probably not a central European countries");
}

neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";

console.log(neighbours);