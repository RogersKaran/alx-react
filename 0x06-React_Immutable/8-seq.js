import { Seq } from 'immutable';

// Function to print the best students
export function printBestStudents(grades) {
  Seq(grades)
    .filter(student => student.score >= 70) // Filter students with score >= 70
    .forEach(student => {
      const firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
      const lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
      console.log(`{ "score": ${student.score}, "firstName": "${firstName}", "lastName": "${lastName}" }`);
        });
}

