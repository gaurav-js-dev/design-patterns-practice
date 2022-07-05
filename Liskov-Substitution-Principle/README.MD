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

- So Square is going to be a rectangle, but it's going to have a different constructor. So in the Square constructor you just specified has size argument and the size happens to be both the width and the height.So you specify both the width and the height size like below code.But here's the problem that if you assume that the square height width are always the same, you have to enforce it.

```javascript
class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let sq = new Square(5);
console.log(sq.toString());
// output undefined x undefined
```

- This is the canonical demo of LSP. The problem here is the user of the code will not be aware at any place that a Square has been provided. They really don't know. So they cannot make assumptions. And the whole thing breaks down. There is a difference in actual and expected output.

```javascript
let useIt = function (rc) {
  let width = rc._width;
  rc.height = 10;
  console.log(`Expected area of ${10 * width}, ` + `got ${rc.area}`);
};
```

- The entire idea of making a square, as opposed to just defining it as a special case of rectangle is a wrong approach. The way we would do this is we would just keep a rectangle. But if you do really want to make a square, then maybe there is a factory method that you can make to manufacture a square or you can have some sort of get is square, for example, where you return a boolean value when the width is equal to the height.
