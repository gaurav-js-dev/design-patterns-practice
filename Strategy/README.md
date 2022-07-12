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

```javascript
class ListStrategy {
  start(buffer) {}
  end(buffer) {}
  addListItem(buffer, item) {}
}
```
