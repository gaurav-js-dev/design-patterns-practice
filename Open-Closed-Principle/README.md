## The Open-Closed Principle (OCP) states that software entities (classes, modules, methods, etc.) should be open for extension, but closed for modification. In practice, this means creating software entities whose behavior can be changed without the need to edit and recompile the code itself.

- So let's say that you have some sort of website like Amazon and you allow people to search for different products based on certain criteria.Hence, we have a class called product. So a product is going to have a couple of attributes like name,color and size.

```javascript
class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}
```

- We have below **colors** and **sizes** available which our products can have. These are enums but in plain Javascript way.

```javascript
let Color = Object.freeze({
  red: "red",
  green: "green",
  blue: "blue",
});

let Size = Object.freeze({
  small: "small",
  medium: "medium",
  large: "large",
  huge: "huge",
});
```

- We want to be able to filter objects by certain criteria. Hence we built a **ProductFilter** class below. So **ProductFilter** is going to have a couple of methods which take a bunch of products as well as some criteria, and it is going to filter those product based on match.

```javascript
class ProductFilter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }
}
```
