// Initialize the original string
let string = 'INDIA';

// Convert the string into an array of characters
let charArray = string.split('');

// Use splice to add 'ONESIA' starting from index 2
let check = charArray.splice(3, 0, 'O', 'N', 'E', 'S');

// Join the array back into a string
let output = charArray.join('');

// Log the output to the console
console.log(output); // Output: 'INDONESIA'
