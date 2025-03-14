class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  setPlacementAge(minPlacementAge) {
    //return a function which takes in argument -> minMarks
    return (minMarks) => {
      if (this.marks >= minMarks && this.age >= minPlacementAge) {
        return true;
      }
      return false;
    };
    //returns true if students marks are gretaer than minMarks and age gretaer than minPlacementAge
    //Complete this function only. Do not alter any other thing.
  }
}

//Do not touching anything below this line

function createNewStudents(name, age, marks) {
  const Riya = new Student(name, age, marks);

  console.log(Riya.setPlacementAge(18)(40));
}

async function readInput() {
  let inputString = "";

  var output = [];

  process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;

    const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);

    const argumentsArr = inputArr[0].split(",");

    createNewStudents(
      argumentsArr[0],
      Number(argumentsArr[1]),
      Number(argumentsArr[2])
    );

    process.exit();
  });
}

readInput();
