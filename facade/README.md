#### Facade pattern hides the complexities of the system and provides an interface to the client using which the client can access the system. This type of design pattern comes under structural pattern as this pattern adds an interface to existing system to hide its complexities.

## Advantages

- Minimizes complexity of sub-systems
- Aids principle of loose coupling
- Software becomes more flexible and easily expandable

## Disadvantages

- Complex implementation (especially with existing code)
- Approach is coupled to an additional level of indirection
- High degree of dependence at facade interface

- This example is going to be synthetic. We won't add any code that actually runs because facade typically involves complex subsystems and we cannot really implement with small code snippets or build anything of sufficient complexity.This example contains valid JavaScript code.

- This example relates to the console, like the console that we use to output text. We might think that the console is a really single kind of construct.It doesn't really require a facade because it's just a single system.It is not true in actual they are really complicated because they involve several different classes.

- One of those classes is a buffer. We need a buffer to store the character somewhere before logging output to the screen.Buffer is some sort of an array of characters that you subsequently get to output. Now, buffer has a construct way to specify the width and height of the buffer for specifying how much characters do you want to store in the horizontal and vertical dimension?

```Javascript
class Buffer extends Array
{
  constructor(width=30, height=20)
  {
    super();
    this.width = width;
    this.height = height;
    //We can also allocate a sufficient amount of memory for the width and the height specified here.
    this.alloc(width*height);
  }

}

```

- Code below is just pseudo-code, but essentially the idea of a buffer is that you write things to that buffer and a buffer is are actually circular buffers, meaning that if there is not enough space, then the first item gets deleted and first item become the last item.So they are circular in their nature.This a typical API looks like.So we have a way of writing text

```Javascript
class Buffer extends Array
{
  constructor(width=30, height=20)
  {
    //
  }

  write(text, position=0)
  {
    // write to the buffer
  }

}

```

- How does an array of characters actually get presented on the screen? It gets presented through a view.We have a class called viewport, and the viewport is designed specifically for presenting a buffer or a part of the buffer.
  Buffers can be massive for example, 10000 lines of characters because you want it to be scrollable.We want to be able to go back and scroll up to your previous entries.But of course, you don't have that much space on the screen.
  So viewport kind of constrains that.

- A viewport reference is a buffer, but it also defines which part of the buffer user is actually looking at.

- So in the constructor of a viewport, we specify a buffer and provide defaults.If we're constructing a viewport without a buffer, well, let's create a new buffer with default parameters.We would store the buffer references to the but in addition, we might want to define an offset in the buffer where user is actually looking, where user is getting data from.

```Javascript
class Viewport
{
  constructor(buffer=new Buffer())
  {
    this.buffer = buffer;
    this.offset = 0;
  }
}
```

- Viewport can give you an ability to append text to that viewport.Appending text to a viewport doesn't really make sense because if viewport is just a view into something, but we will define and append method as a way of just just making it really convenient to add a chunk of text at a particular position relative to the viewport.

- So this is something that you might commonly do through a viewport rather than going directly into the buffer.In addition, you might have kind of lower level kind of APIs, for example, being able to get a character at a particular index simply using the viewport to look into the buffer at a particular offset and getting that character, because this is how you typically print letters to the console. So here you would return this buffer at a particular position like this that offsets plus index in getCharAt method in below code.

```Javascript

class Viewport
{
  constructor(buffer=new Buffer())
  {
    this.buffer = buffer;
    this.offset = 0;
  }

  // high-level
  append(text, pos)
  {
    //We take the associated buffer and then we would write the text to that buffer and the position would be the position provided, plus the offset of the original viewport.
    this.buffer.write(text, pos + this.offset);
  }

  getCharAt(index)
  {
    return this.buffer[this.offset + index];
  }
}
```

- We're getting something that's rather complicated.Mostly we don't even think about Consoles in terms of Buffer's or viewports.We just want to call console.We want to console with a single buffer, a single viewport and a sensible set of defaults basically.

- That's exactly where the facade pattern comes in because Console is effectively a facade for all of those things that we brought to a console is a facade for a subsystem related to buffers and buffer management.It's a subsystem related to viewport and if we're talking about algorithms then all of this becomes really complicated
  and we just want a facade.You just want the classical console that somebody can call the constructor for, get a sensible set of defaults and get up and running quickly.

- Advanced users who want multiple buffers, who want multiple viewpoints, they can take below facade and they can customize it.We can provide high level methods for the console to operate on the underlying buffer.This is a very nice wrapper around multiple subsystems.But we can also make advanced uses so we can expose the lower level APIs through the facade.

```Javascript

class Console
{
  constructor()
  {
    this.buffer = new Buffer();
    this.currentViewport = new Viewport(
      this.buffer
    );
    this.buffers = [this.buffer];
    this.viewports = [this.currentViewport];
  }

  // high-level
  write(text)
  {
    this.currentViewport.buffer.write(text);
  }
  //So, for example, if you want to get a character at a particular position, we can expose that as well through this method for a power user where you would return this current viewport and once again, you would call get Char at at a particular index.
  // low-level
  getCharAt(index)
  {
    return this.currentViewport.getCharAt(index);
  }
}
```

- This all is still hiding some of the implementation details and as a result, those implementation details can actually change.So the facade gets you lots of benefits because you can change the implementation details without really affecting the user in any way, because all the user has to do. For eg write hello to the console and that would output in a two dimensional grid of characters. You have some access to low level APIs if you want to. So if you want a character and particular position, you can say C get character from position zero. in below code

```Javascript

let c = new Console();
c.write('hello');
let ch = c.getCharAt(0);

```
