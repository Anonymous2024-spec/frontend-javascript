// 1. Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // 2. Allow any additional properties
  [key: string]: any;
}

// 3. Create a teacher object based on the spec
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

// 4. Output to verify
console.log(teacher3);

// 2. Extend Teacher with the Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// 3. Create a Directors object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// 4. Output to confirm
console.log(director1);

// Function type interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test output
console.log(printTeacher("John", "Doe")); // J. Doe
