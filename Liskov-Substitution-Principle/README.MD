### Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application. In other words, what we want is to have the objects of our subclasses behaving the same way as the objects of our superclass.

- In below code is a very kind of basic example of defining a rectangle and it has a method to calculate area by multiplying height into width.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  toString() {
    return `${this.width}×${this.height}`;
  }
}

let rc = new Rectangle(2, 3);
console.log(rc.toString());
```

- You decide to also introduce a new concept called Square. But whenever working with a square, you want to enforce that the square always have the same width and height.

- So Square is going to be a rectangle, but it's going to have a different constructor.

So in the constructor you just specified size and the size happens to be both the width and the height.

So you specify both the width and the height size.

But here's the problem.

The problem is that if you assume that the square Highton width are always the same, you have to enforce
