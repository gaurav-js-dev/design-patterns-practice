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
