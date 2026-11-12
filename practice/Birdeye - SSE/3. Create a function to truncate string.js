/*
This question was asked in Birdeye's frontend interview.

It was asked to create a function to truncate the string and end it with the ellipses characters ... at the end.

Create a function truncate(str, maxlength) that checks the length of the given str and if it exceeds maxlength, replaces the end of str with the ellipsis character ... , to make its length equal to maxlength.

Example
Input:
truncate("What I'd like to tell on this topic is:", 20)

Output:
"What I'd like to tel..."

Note: You have to implement the solution that solves the problem. There are no test cases to this. Test it yourself using the sample testcases.
*/

function truncateString(str, length) {
  return str.slice(0, length) + "...";
};

console.log(truncateString("What I'd like to tell on this topic is:", 20));
//"What I'd like to tel..."
