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

- We want to render all these shapes. We have different ways of rendering Circle, Square. We can use three render methods using pixels,raster rendering or a vector format. If we try to implement a Class hierarchy for all of this we end up with too many data types below.

1. Vector Circle 2. Raster Square 3. Pixel Circle
2. Vector Square 5. Raster Square 6. Pixel Square
3. Vector Square 8. Raster Square 9. Pixel Square
