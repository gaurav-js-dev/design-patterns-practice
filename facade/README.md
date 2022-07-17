#### Facade pattern hides the complexities of the system and provides an interface to the client using which the client can access the system. This type of design pattern comes under structural pattern as this pattern adds an interface to existing system to hide its complexities.

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
