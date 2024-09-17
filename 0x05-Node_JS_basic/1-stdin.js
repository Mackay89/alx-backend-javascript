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

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    // Convert the chunk to string and trim any extra whitespace
    const name = chunk.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

