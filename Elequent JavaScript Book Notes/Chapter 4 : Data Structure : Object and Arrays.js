// Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error. To acces the properties simply add the dot operator followed by the property name. ( example : value.x )

const octopus = {
    name: "Octopus",
    rightLeg: true,
    leftLeg: true,
};

console.log(octopus);   // printing the whole octopus object.

delete octopus.leftLeg;

console.log(octopus);   // printing the whole octopus object after deleting the leftLeg property.