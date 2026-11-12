for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(String(j+1));
  }
  console.log("\n");
}