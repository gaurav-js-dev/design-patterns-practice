const JAMES_MATHEMATICS = [90, 95, 98, 100];

class GradeCalculator {
  constructor(gradesToCalculate) {
    this.grades = gradesToCalculate;
  }

  calculateGrades() {
    const total = this.getSummationOfArrayOfNumbers(this.grades);

    const average = this.getQuotientOfTwoNumbers(total, this.grades.length);

    this.displayResult(average);
  }

  getSummationOfArrayOfNumbers(arrayOfNumbers) {
    return arrayOfNumbers.reduce((a, b) => a + b);
  }

  getQuotientOfTwoNumbers(number1, number2) {
    return number1 / number2;
  }

  displayResult(result) {
    console.log("The result is: ", result);
  }
}

const gc = new GradeCalculator(JAMES_MATHEMATICS);

gc.calculateGrades();
