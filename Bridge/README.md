### The Bridge design pattern allows you to separate the abstraction from the implementation. It is a structural design pattern.

- We have a class Shape. We have different inheritors from class like Circle, Square, Triangle.

```Javascript
class Shape {

}

class Circle extends Shape {

}

class Square extends Shape {

}
```

- We want to render all these shapes. We have different ways of rendering Circle, Square. We can use three render methods using pixels,raster rendering or a vector format. If we try to implement a Class hierarchy for all of this we end up with too many data types below. You have three renderers and three different shapes, you would end up with nine different classes.

1. Vector Circle 2. Raster Square 3. Pixel Circle
2. Vector Square 5. Raster Square 6. Pixel Square
3. Vector Triangle 8. Raster Triangle 9. Pixel Triangle

- Now, the way that you avoid this is you build a bridge between the two hierarchies. We have one hierarchy, which is a hierarchy of shapes like Circle, Square, Triangle. The other hierarchy is the hierarchy of renderers like below code.

```Javascript
class VectorRenderer
{
///
}

class RasterRenderer
{
//
}

class PixelRenderer
{
//
}

```

- We should make some sort of bridge between these elements.In Shape class here, we can introduce a constructor which just takes the renderer for rendering the shape and then we just store it.We can actually render the different shapes.

```Javascript
class Shape
{
  constructor(renderer)
  {
    this.renderer = renderer;
  }
}
```

- Let's imagine that we have a class called Circle, which extends shape and it has a constructor which takes a renderer so that we can call the base constructor and the constructor takes a render.
  But let's imagine it also takes something specific, like the radius of the circle that you want to
  work with. So here we call the base class constructor providing the renderer, obviously, because we need to assign that and we also store the radius.

```Javascript

class Circle extends Shape
{
  constructor(renderer, radius) {
    super(renderer);
    this.radius = radius;
  }

//A circle and indeed all the other shapes need to implement some sort of method called draw. So there's the renderer and we're going to render a circle around a circle of a given radius.
  draw()
  {
    this.renderer.renderCircle(this.radius);
  }
  resize(factor)
  {
    this.radius *= factor;
  }
}
```

```Javascript
class VectorRenderer
{
  renderCircle(radius)
  {
    console.log(`Drawing a circle of radius ${radius}`);
  }
}

class RasterRenderer
{
  renderCircle(radius)
  {
    console.log(`Drawing pixels for circle of radius ${radius}`);
  }
}
```

```Javascript
// So we'll have a roster and vector renderer.
let raster = new RasterRenderer();
let vector = new VectorRenderer();
// We have to specify the render that we want to use, like the vector render, for example, and then specify the radius as well.
let circle = new Circle(vector, 5);
// we can draw the circle
circle.draw();
// We can take the circle and resize it using its own method.So double the radius and then draw the circle again.
circle.resize(2);
circle.draw();
```

- This does get us away from having too many classes.The take away from this example is that the bridge design pattern is just a way of connecting to hierarchies of objects together. So here we have a hierarchy of shapes. We have a hierarchy of renderers, even though we haven't given them any common base class.But you can think of them as related objects and then we have the bridge itself and the bridge itself happens right here inside Class Shape constructor .
