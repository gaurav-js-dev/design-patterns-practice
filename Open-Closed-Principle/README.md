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

- We will make some products objects

  1. An apple to be green and small.
  2. A tree with green color and large.
  3. House with blue color and large size

- So we're going to have this above list of products. Let's put them into an array.

```javascript
let apple = new Product("Apple", Color.green, Size.small);
let tree = new Product("Tree", Color.green, Size.large);
let house = new Product("House", Color.blue, Size.large);

let products = [apple, tree, house];
```

- Let's say we recieve a product requirement to filter by green color So what we can do now is we can find all the green products with below method inside our **ProductFilter** class. Below method will log all green color products like apple and house.

```javascript
class ProductFilter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }
}

let pf = new ProductFilter();
console.log(`Green products (old):`);
for (let p of pf.filterByColor(products, Color.green))
  console.log(` * ${p.name} is green`);
```

- Now, suppose another requirement arises product team says, well, can you please also filter by size. Inside ProductFilter class we can add another method to filter by size and like below code the implementation is going to be very similar. In fact, it's almost like cut and paste programming.

- <p>We modifying a class that might have already been tested, might have already been deployed somewhere and we are making changes to it. This is not as good as actually extension. And by extension, we mean a lot of things, but typically we mean inheritance. We mean that a class inherits from another class and automatically acquires some of its fields, some of its members, and then adds additional functionality. </p>

- So the whole idea of OCP, the open closed principle, is that this filter, once it's defined, once you add the filter by color, you've tested it, you've put it into production, we don't modify the class anymore. And we are breaking the open closed principle by adding another filter here, because imagine well, we put this filter into production and it goes it gets tested.It gets put into production and actually runs on the website.

- And then the product team comes back and asks us well, can you also please filter by both size and color because some of our users want to filter with a combination of both. So , we implement yet another method, size and color as below code.we have to specify that piece size is equal to size and color is equal to color.

```javascript
class ProductFilter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }

  filterBySize(products, size) {
    return products.filter((p) => p.size === size);
  }

  filterBySizeAndColor(products, size, color) {
    return products.filter((p) => p.size === size && p.color === color);
  }
}
```

- This entire approach doesn't work to scaling and adding feature, i.e product team can come back and say, can you please filter by size or color? So either the size matches or the color matches.

- Imagine if you have instead of just having size and color, you have three criteria and you want to filter using the && operator, you want to filter by all combinations. That's going to be seven different methods because you filter let's say you filter by color, size and price.
  So you have color and size, price and color, size or color, color or price, color and price and then all three of them. So that's seven different methods.
  There is no way we're going to write seven different methods for actually performing this kind of filtering.
  It's not practical.
  You have to have a different kind of architecture for implementing this.

-The solution is that whenever you want to have a particular filtering criteria, you specify a separate class which defines that sort of filtering and that class is called the specification and and is going to allow us to write something which is very modular and very easy to work with.

- So better filter is also going to have a method called filter, which takes a bunch of items as well as a specification and here the thing is that we're going to filter. So we return items that filter by checking the specification against every single item. So you take an item X and you make sure that the specification is satisfied whenever you call it on X. So if this specification is satisfied, you get that and if it's not satisfied, then you don't get that.

```javascript
class BetterFilter {
  filter(items, spec) {
    return items.filter((x) => spec.isSatisfied(x));
  }
}

let bf = new BetterFilter();
console.log(`Green products (new):`);
for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
  console.log(` * ${p.name} is green`);
}
```
