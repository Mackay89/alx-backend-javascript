const fs = require('fs');

/**
 * Function to count students in a CSV file asynchronously.
 * @param {string} dataPath - The path to the CSV file.
 * @returns {Promise} - Resolves if the file is successfully read and processed, rejects with an error otherwise.
 */
const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    // Asynchronously read the file
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        // Reject with an error message if the file can't be read
        return reject(new Error('Cannot load the database'));
      }

      // Ensure we only process non-empty data
      if (data) {
        const lines = data.trim().split('\n');

        // Check if file has content
        if (lines.length < 2) {
          return reject(new Error('File is empty or malformed'));
        }

        const students = {};
        const header = lines[0].split(','); // Extract headers
        const fieldIndex = header.length - 1; // The field is the last column

        // Process each line, excluding the header
        for (const line of lines.slice(1)) {
          const studentData = line.split(',');

          // Skip empty or malformed lines
          if (studentData.length === header.length) {
            const field = studentData[fieldIndex];
            const firstName = studentData[0];

            // Group students by field
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstName);
          }
        }

        // Total number of students
        const totalStudents = Object.values(students).reduce((acc, curr) => acc + curr.length, 0);
        console.log(`Number of students: ${totalStudents}`);

        // Log each field's student count and list of names
        for (const [field, studentList] of Object.entries(students)) {
          console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        }

        resolve(); // Successfully resolved the promise
      }
    });
  });
};

module.exports = countStudents;

