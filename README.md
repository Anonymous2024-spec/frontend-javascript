
# 0x04. TypeScript

This project introduces the basics of TypeScript, with a focus on interfaces, classes, advanced types, DOM manipulation, ambient declarations, namespaces, declaration merging, and nominal typing.

## 📁 Task Summary

---

### **Task 0: Creating an Interface for a Student**

* Define `Student` interface with `firstName`, `lastName`, `age`, and `location`.
* Create two students and render them in a table using Vanilla JS.

---

### **Task 1: Teacher Interface & Class**

* Create `Teacher` interface with specific and dynamic fields.
* Extend it with a `Directors` interface that includes `numberOfReports`.
* Define a function `printTeacher` returning formatted name.
* Implement `StudentClass` with methods using interfaces.

---

### **Task 2: Advanced Types Part 1**

* Define `DirectorInterface` and `TeacherInterface`.
* Implement `Director` and `Teacher` classes.
* Create `createEmployee()` function to return instances based on salary.
* Add type predicate `isDirector()` and `executeWork()` function.
* Use string literal types to implement `teachClass()`.

---

### **Task 3: Ambient Namespaces**

* Define `RowID` and `RowElement` types.
* Use a JS file (`crud.js`) with ambient type declarations (`crud.d.ts`).
* Perform insert, update, and delete using imported `CRUD` functions.

---

### **Task 4: Namespaces & Declaration Merging**

* Create a `Subjects` namespace for classes and interfaces.
* Use declaration merging to extend `Teacher` interface in each subject.
* Implement `Cpp`, `Java`, and `React` classes with conditional logic.
* In `main.ts`, instantiate each class, assign a teacher, and call methods.

---

### **Task 5: Nominal Typing via Branding**

* Define `MajorCredits` and `MinorCredits` interfaces.
* Add `_brand` properties to prevent mixing types.
* Create `sumMajorCredits` and `sumMinorCredits` functions for safe type usage.

---

## ✅ Compilation & Execution

```bash
npx tsc       # Compile TypeScript files
node dist/main.js   # Run the output (if applicable)
```

> Ensure `tsconfig.json` is correctly configured for each task. Use `module: "none"` for namespaces.

---

## 🧠 Concepts Covered

* TypeScript interfaces, classes, and function types
* Working with the DOM in TypeScript
* Type guards and type predicates
* Declaration merging
* Ambient module declarations
* String literal types
* Nominal typing using branding
* Namespaces vs Modules

