### Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

- In this example we have a base class as Shape and common shapes are kept in this class. Another class is Circle which extends shape. We also add few methods on Circle to resize and print the radius.

```Javascript

class Shape {}

class Circle extends Shape
{
  constructor(radius=0)
  {
    super();
    this.radius = radius;
  }

  resize(factor)
  {
    this.radius *= factor;
  }

  toString()
  {
    return `A circle of radius ${this.radius}`;
  }
}
```

- Later we have a requirement to add color to the shapes. Well, a very bad way would be to go into the base class and add a constructor, which also takes a color and you assign the color like this below.

```Javascript

class Shape {
  constructor(color)
  {
    this.color = color;
  }
}

class Circle extends Shape
{
  constructor(radius=0)
  {
    super();
    this.radius = radius;
  }

  resize(factor)
  {
    this.radius *= factor;
  }

  toString()
  {
    return `A circle of radius ${this.radius}`;
  }
}
```

- Now the problem is how do we get the circle to print information about this color inside its toString method? Because we want to print here that we have a red circle of radius so. But unfortunately, you are unable to do it without also modifying the circle class.So eventually we end up modifying basically the entire inheritance hierarchy.

- So modifying either the base class or the inheritance might not be the best idea because it violates open-closed principle and classes should be closed for modification.
