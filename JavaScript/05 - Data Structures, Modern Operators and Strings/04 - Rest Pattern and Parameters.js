const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);


const user = {
    name: "John Doe",
    age: 30,
    address: "123 Main Street",
    phone: "123-456-7890",
  };
  
  const { name, age, ...otherInfo } = user;
  console.log(name)