/**
 * Prompts the user to enter their name, reads the input from STDIN,
 * and displays a message containing the user's name.
 *
 * The user can type "exit" or use Ctrl+D to end the program.
 *
 * @example
 * // Output:
 * // Welcome to Holberton School, what is your name? (Type "exit" to quit)
 * // Khaya
 * // Your name is: Khaya
 * // This important software is now closing
 */

process.stdout.write('Welcome to Holberton School, what is your name? (Type "exit" to quit)\n');

// Listen for readable events on stdin
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    const name = chunk.toString().trim(); // Convert input to string and trim whitespace
    if (name.toLowerCase() === 'exit') {
      process.stdout.write('This important software is now closing\n');
      process.stdin.end(); // End the input stream
    } else {
      process.stdout.write(`Your name is: ${name}\n`);
    }
  }
});

// Listen for the end event on stdin
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

