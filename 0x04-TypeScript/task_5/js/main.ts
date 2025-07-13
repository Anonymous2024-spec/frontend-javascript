// Define MajorCredits interface with branding
interface MajorCredits {
  credits: number;
  readonly _brand: "MajorCredits"; // Branding property for nominal typing
}

// Define MinorCredits interface with branding
interface MinorCredits {
  credits: number;
  readonly _brand: "MinorCredits"; // Branding property for nominal typing
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "MajorCredits",
  };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "MinorCredits",
  };
}

// ✅ Test (optional)
const major1: MajorCredits = { credits: 3, _brand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, _brand: "MajorCredits" };

const minor1: MinorCredits = { credits: 2, _brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 1, _brand: "MinorCredits" };

console.log("Sum Major:", sumMajorCredits(major1, major2));
console.log("Sum Minor:", sumMinorCredits(minor1, minor2));
