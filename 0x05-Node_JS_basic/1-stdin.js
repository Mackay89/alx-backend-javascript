/**
 * Program to prompt the user for their name and display a custom message.
 *
 * - Displays a welcome message.
 * - Reads user input from stdin and outputs a personalized message.
 * - Displays a closing message when the program ends.
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for readable events on stdin
process.stdin.on('readable', () => {
  const chunk = process.stdin.read(); // Read user input

  if (chunk) {
    const name = chunk.toString().trim(); // Convert to string and trim
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

// Listen for the end event on stdin (triggered by Ctrl+D or pipe input)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

