// 1. Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two student objects
const student1: Student = {
  firstName: "Shifah",
  lastName: "Naana",
  age: 25,
  location: "Uganda",
};

const student2: Student = {
  firstName: "Amina",
  lastName: "Ali",
  age: 24,
  location: "Kenya",
};

// 3. Store them in an array
const studentsList: Student[] = [student1, student2];

//table
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
