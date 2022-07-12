#### In Strategy pattern, a class behavior or its algorithm can be changed at run time. This type of design pattern comes under behavior pattern.In Strategy pattern, we create objects which represent various strategies and a context object whose behavior varies as per its strategy object. The strategy object changes the executing algorithm of the context object.

- We want a text processor to export a document or to different kinds of formats like HTML list or Markdown list.
  1.HTML list
    <ul>
    <li>Item One</li>
    <li>Item Item two</li>
    </ul>

  2.Markdown list

  - Item One
  - Item Two
  - Item Three

- We have to define the two different formats that we support.

```javascript
let OutputFormat = Object.freeze({
  markdown: 0,
  html: 1,
});
```

- In Class TextProcessor we are going to call a method to set output format provided in the argument.

```javascript
class TextProcessor {
  constructor(outputFormat) {
    this.buffer = [];
    this.setOutputFormat(outputFormat);
  }
}
```

- We want to be able to look at the format and be able to switch on the format and decide what to do with it.

```javascript
class TextProcessor {
  constructor(outputFormat) {
    this.buffer = [];
    this.setOutputFormat(outputFormat);
  }
      switch (format)
    {
    //So in this case when the output format is markdown, we want to adopt a particular strategy.
      case OutputFormat.markdown:
        this.listStrategy = new MarkdownListStrategy();
        break;
    //When the output format is HTML list, we want to adopt a different strategy.
      case OutputFormat.html:
        this.listStrategy = new HtmlListStrategy();
        break;
    }
}
```

- These strategies are all going to have some sort of base class. We will create a base class called ListStrategy.Now, this class is supposed to be abstract, but we're going to define the interface, that markdown strategy and HTML strategy both is used.

- Below are three things that we need to add.

  1.We need to make a start method and this is going to take a buffer argument where we actually add things.

  2.We're going to have an end of method also taking the buffer argument.
  3.We're also going to have an add list item method.Here we need the buffer, but we also need the text of the item that we're adding.

```javascript
class ListStrategy {
  start(buffer) {}
  end(buffer) {}
  addListItem(buffer, item) {}
}
```

- Notice that all of these methods empty. That means that when you inherit them, you don't necessarily have to provide your own definition. You can just allow the inheritance to take place, in which case you'll have a no up method.

- Markdown does not need start and end. There is no start and end tag. Therefore you don't have to implement those methods.So in the case of a markdown strategy. Which obviously extends ListStrategy.We just need to override the addListItem.

```javascript
class MarkdownListStrategy extends ListStrategy {
  addListItem(buffer, item) {
    buffer.push(` * ${item}`);
  }
}
```

- HtmlListStrategy need all methods start, end and the addListItem

```javascript
class HtmlListStrategy extends ListStrategy {
  start(buffer) {
    buffer.push("<ul>");
  }

  end(buffer) {
    buffer.push("</ul>");
  }

  addListItem(buffer, item) {
    buffer.push(`  <li>${item}</li>`);
  }
}
```

- In TextProcessor class we're going to have a method called append list, which takes a bunch of items and append those items.

```javascript
class TextProcessor {
  appendList(items) {
    this.listStrategy.start(this.buffer);
    for (let item of items) this.listStrategy.addListItem(this.buffer, item);
    this.listStrategy.end(this.buffer);
  }
  clear() {
    this.buffer = [];
  }

  toString() {
    return this.buffer.join("\n");
  }
}
```

- Below we are using the text processor

```javascript
let tp = new TextProcessor(OutputFormat.markdown);
// Let's begin with the markdown format and append list.
tp.appendList(["abc", "cd", "gf"]);
console.log(tp.toString());
tp.clear();
// We can again dynamically set it to the HTML format
tp.setOutputFormat(OutputFormat.html);
tp.appendList(["eagle", "demo", "charlie"]);
console.log(tp.toString());
```

- This is very simple approach for defining the high level algorithm as we've done here in the append list while leaving the low level implementations to the inheritors of some class.We've introduced this list strategy class, which serves to define that every little strategy has to adopt and then you simply inherited to override the parts that you want, ignoring the parts that you don't notice, that for markdown strategy. We just reuse the base class ones because they're empty.

**So this is how we define the strategies and this is how you use them as well.**
