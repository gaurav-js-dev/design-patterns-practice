### The Dependency Inversion Principle (DIP) states that high level modules should not depend on low level modules; both should depend on abstractions. Abstractions should not depend on details.

- We have a **Document** class in the system we have clients which want to implement different devices such as printers, multifunction printers, scanners and so on.

```javascript
class Document {}
```

- We create a class which behaves as an interface definition, basically.So we make a class **Machine**.We make sure that this **Machine** class cannot be constructed. So we try to make it abstract. We just look at the constructor name and if it's a machine, then we throw an error because what, we're not supposed to be instantiating this directly.

```javascript
class Machine {
  constructor() {
    if (this.constructor.name === "Machine")
      throw new Error("Machine is abstract!");
  }
}
```

- So here in below code we define the interface for whoever wants to make a machine. We tell them that, well, if you want to make a machine, you should be overriding a print method as well as a fax method and maybe a scan method like so.So this is all well and good.

```javascript
class Machine {
  constructor() {
    if (this.constructor.name === "Machine")
      throw new Error("Machine is abstract!");
  }

  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}
```

- Unfortunately, this above doesn't work in all cases. So imagine we have a client which really does want to make some sort of multifunction printer. Our client do actually want all of this functionality.They can just see a class **MultifunctionPrinter** extends **Machine** class and then they can just use their favorite idea to basically generate all the relevant overrides.

- And if client is making a multifunction printer, then they can give each one of these methods meaningful content to print, fax, scan, copy the document. So these are completely relevant things to suggest client actually do with a multifunction printer.

```javascript
class MultiFunctionPrinter extends Machine {
  print(doc) {
    //
  }

  fax(doc) {
    //
  }

  scan(doc) {
    //
  }
}
```

- But let's suppose that the client doesn't really need all of this above and client wants an old fashioned printer. Old fashioned printer, which also extends the machine because that's the interface that we are
  asking or suggesting the clients to define. The old fashioned printer is going to have a bit of a problem because when you go and you override the methods.

- When it comes to implementing the printing functionality, this is actually fine because an old fashioned printer can print. The problem an old fashioned printer doesn't know how to fax documents or scan documents.So the question is, what do we put in these methods. We can also just leave it blank and this is going to do nothing.

```javascript
class OldFashionedPrinter extends Machine {
  print(doc) {
    // ok
  }

  fax(doc) {
    //   // do nothing
  }

  scan(doc) {
    //   // do nothing
  }
}
```

- Unfortunately, this also violates one principle of software design that you should be aware of, and that's called the principle of least surprise.When users use your API, they should not be surprised.
  They should not be seeing some magic behavior or a lack of behavior.You want them to get predictable results.

- So when we leave the fax method blank, we basically break this principle because even though everybody is going to see that this class is called OldFashioned But users see its interface has a fax method.
  Why don't we try calling that and then somebody will try calling that and they will get no result.

- If we don't like the principle of least surprise being broken hence we're going to throw error
  by saying not implemented.

```javascript
class NotImplementedError extends Error {
  constructor(name) {
    let msg = `${name} is not implemented!`;
    super(msg);
    // maintain stack trace
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, NotImplementedError);
  }
}

class OldFashionedPrinter extends Machine {
  print(doc) {
    // ok
  }

  // omitting this is the same as no implementation

  // fax(doc) {
  //   // do nothing
  // }

  scan(doc) {
    // throw new Error('not implemented!');
    throw new NotImplementedError("OldFashionedPrinter.scan");
  }
}

let printer = new OldFashionedPrinter();
printer.scan();
```

- Unfortunately, this is still somewhat user unfriendly because by defining this interface to be too full of code we don't need, we are forcing the clients to either leave methods blank or throw errors out of those methods and neither approach is a particularly good approach.

- Interface segregation principle means that you have to segregate or split up interfaces into different parts so that people don't implement more than what they need.If you want to formalize the contract that you would have for a **Printer** class with the print method and same applies for scanner. We can also make it abstract

- You can take the old fashioned printer and you can just go ahead and implement it by extending the printer instead of extending machine class.

```javascript
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
```
