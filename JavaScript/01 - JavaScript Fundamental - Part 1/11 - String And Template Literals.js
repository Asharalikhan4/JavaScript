const firstName = "Ashar";
const lastName = "Ali Khan";
const occupation = "Full stack developer";

// if you want to use this variable in your string you have two ways.

// first way -> by concatination of string
const firstWay =
  "Hey my name is " + firstName + " " + lastName + " and I'm a " + occupation;

console.log(firstWay);

// Or you can use the template literals, it is an ES6 feature.
const secondWay = `Hey my name is ${firstName} ${lastName} and I'm a ${occupation}`;

console.log(secondWay);

// Both will return you same output.

/*
# Modern Search & Inspection (ES6+)

1. includes(substring): Returns true/false if the string contains the value.
2. startsWith(substring): Checks if the string begins with the value.
3. endsWith(substring): Checks if the string ends with the value.
4. indexOf(substring): Returns the first index of the value, or -1 if not found.
5. lastIndexOf(substring): Same as above, but starts from the end.
*/

/*
# Transforming & Formatting

1. toUpperCase() / toLowerCase(): Standard casing changes.
2. trim(): Removes whitespace from both ends.
3. trimStart() / trimEnd(): Specifically targets one side of the string.
4. repeat(count): Returns a new string with the original repeated 
 times.
5. padStart(targetLength, padString): Pads the start (useful for formatting dates like 01, 02).
6. padEnd(targetLength, padString): Pads the end of the string.
*/

/*
# Extraction (Substrings)

1. slice(start, end): Extracts a section and returns it. (Senior tip: Prefer slice over substring as it handles negative indices better).
2. substring(start, end): Similar to slice, but treats negative numbers as 0.
3. charAt(index): Returns the character at a specific position.
4. at(index): Modern (ES2022) version of charAt that allows negative indices (e.g., -1 for the last character).
*/

/*
# Splitting and Joining

1. split(separator): Converts a string into an Array. (The inverse of Array's .join()).
2. concat(...strings): Joins multiple strings (though template literals `${a}${b}` are now the industry standard).
*/

/*
# Regex & Replacement

1. replace(pattern, replacement): Replaces the first match (if pattern is a string) or matches based on Regex.
2. replaceAll(pattern, replacement): Replaces all occurrences without needing a global (/g) Regex flag.
3. match(regex): Retrieves matches when matching a string against a regular expression.
4. search(regex): Returns the index of the first match.
*/