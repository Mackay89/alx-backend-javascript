/**
 * Prompts the user to enter their name, reads the input from STDIN,
 * and displays a message containing the user's name.
 *
 * When the user ends the program, a closing message is displayed.
 *
 * @example
 * // Output:
 * // Welcome to Holberton School, what is your name?
 * // Khaya
 * // Your name is: Khaya
 * // This important software is now closing
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for input from the standard input (STDIN)
process.stdin.on('data', (chunk) => {
  // Convert the input to a string and remove leading/trailing whitespace
  const name = chunk.toString().trim();

  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  } else {
    process.stdout.write('You did not provide a name.\n');
  }
});

// Handle the end event (when the user closes the input stream)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

