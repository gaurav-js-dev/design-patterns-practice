### Composite pattern is a partitioning design pattern and describes a group of objects that is treated the same way as a single instance of the same type of object. The intent of a composite is to “compose” objects into tree structures to represent part-whole hierarchies.

- Now, the first example I want to show is the idea of grouping geometric shapes together.

- In a drawing application, we can drag around that and resize individual shapes, but also group several shapes together and then perform common operations on them. So what we're going to do is we're going to kind of emulate this scenario.

- We have a class GraphicObject which is going to be both a single object if it's used as a base class as well as a collection of objects, if it's used by itself. It sounds tricky so please follow along code snippets below.

```Javascript
class GraphicObject
{
  get name()
  {
    return this._name;
  }
  //Every single graphic object have a name, so every single graphics and by default, when we make a graphic object as opposed to an inheritor of this class also we are going to increment count on a new group

  constructor(name='Group ' + (GraphicObject.count++))
  {
    //GraphicObject has a number of other graphic objects inside it so we want children, or it can act as a standalone object
    this.children = [];
    this.color = undefined;
    this._name = name;
  }
}
  GraphicObject.count = 0;
```

- We want to print not just the object, but also everything that it contains with print method as below inside GraphicObject.

```Javascript
class GraphicObject
{
  print(buffer, depth)
  {
    //we use buffer to put a number of asterisks representing the depth that we are in and print
    buffer.push('*'.repeat(depth));
    if (depth > 0)
      buffer.push(' ');
    if (this.color)
      buffer.push(this.color + ' ');
    buffer.push(this.name);
    buffer.push('\n');

   for (let child of this.children)
      child.print(buffer, depth+1);
  }

  toString()
  {
    let buffer = [];
    this.print(buffer, 0);
    return buffer.join('');
  }

}

```

- If the children collection, then we can suddenly make it just contain all the graphic objects inside it but we need standalone concrete implementation also.Let's make a circle and square which extends graphic objects.

```Javascript
class Circle extends GraphicObject
{
  constructor(color)
  {
    super('Circle');
    this.color = color;
  }
}

class Square extends GraphicObject
{
  constructor(color)
  {
    super('Square');
    this.color = color;
  }
}

```

- This above let us construct an object which consists of several other graphic objects. So, for example, I can make a drawing, so drawing because new graphic object.

```Javascript
// Make a drawing first as group 0 then we can take the children from drawing then start.
let drawing = new GraphicObject();
// Make a drawing first as group 0 then we can take the children from drawing then start.
drawing.children.push(new Square('Red'));
drawing.children.push(new Circle('Yellow'));
```

- Above this is fairly simple stuff, but this stuff does not represent the composite design pattern, the composite design pattern is the next part, because what we make a group that's part of this entire drawing so we can make a group which is a new graphic object that's going to be grouped.

```Javascript

let group = new GraphicObject();
group.children.push(new Circle('Blue')); // make a blue circle
group.children.push(new Square('Blue')); // make a square circle
drawing.children.push(group); // add this group as another element of the drawing

console.log(drawing.toString());
// Star represents the hierarchy Group 0 has it's own children and Group 1 inside it. Ground 1 inside group 0 has blue circle and square
// output
Group 0
* Red Square
* Yellow Circle
* Group 1
** Blue Circle
** Blue Square
```

- We have just added a group into a group and you can have groups of groups of groups to infinity.There is no limit to how this whole thing actually goes. Above what's happening here is that circles and squares and entire graphic objects get treated in a uniform manner in the sense that when you call to a string, whether it's a scalar object or singular object or it's a container or a collection of different objects, it doesn't really matter.It's always going to be printed correctly because while we've implemented this correctly

- GraphicObject has collection of children, a list which is initially empty, but you can add elements to it and subsequently you can turn this into a fully fledged container.So that's the whole idea of the composite design pattern, basically treating singular objects and collections of objects in a uniform manner and in this case, it's done through a base class because a single based class is used for both scalar objects and it's also used by itself whenever you actually want a container of some kind.
