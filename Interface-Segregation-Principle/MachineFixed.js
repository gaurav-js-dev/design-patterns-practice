class Printer {
  constructor() {
    if (this.constructor.name === "Printer")
      throw new Error("Printer is abstract!");
  }

  print() {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === "Scanner")
      throw new Error("Scanner is abstract!");
  }

  scan() {}
}
