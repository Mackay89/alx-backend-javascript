const fs = require('fs');

const countStudents = (dataPath) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      throw new Error('Cannot load the database');
    }
    if (data) {
      console.log('File data:', data);  // Debug log to check file contents
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');

      // Additional code for processing data goes here...
    }
  });
};

module.exports = countStudents;

