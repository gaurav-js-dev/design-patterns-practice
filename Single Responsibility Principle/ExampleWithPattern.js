const JAMES_MATHEMATICS = [90, 95, 98, 100];

class GradeCalculator {
  constructor(gradesToCalculate) {
    this.grades = gradesToCalculate;
  }

  calculateGrades() {
    const mathUtil = new MathUtils();
    const total = mathUtil.getSummationOfArrayOfNumbers(this.grades);
    const average = mathUtil.getQuotientOfTwoNumbers(total, this.grades.length);
    displayResult(average);
  }
}

class MathUtils {
  getSummationOfArrayOfNumbers(arrayOfNumbers) {
    return arrayOfNumbers.reduce((a, b) => a + b);
  }

  getQuotientOfTwoNumbers(number1, number2) {
    return number1 / number2;
  }
}

const displayResult = (result) => {
  console.log("The result is: ", result);
};

const gc = new GradeCalculator(JAMES_MATHEMATICS);

gc.calculateGrades();
