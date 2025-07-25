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

// 1. Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 2. Interface for class instance methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 3. Class implementation
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// 4. Example usage
const student = new StudentClass("Shifah", "Naana");
console.log(student.displayName()); // Output: Shifah
console.log(student.workOnHomework()); // Output: Currently working
