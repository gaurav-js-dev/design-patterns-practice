## Single Responsibility Principle (SRP)

### The idea behind the SRP is that every class, module, or function in a program should have one responsibility/purpose in a program. As a commonly used definition, "every class should have only one reason to change".

- So the primary responsibility of the Journal class in above code is to add entries and remove entries so it has add entry and remove entry method.

- Everything is fine so far because the Journal is just handling its primary responsibility, which is the keeping of entries. It kind of makes sense that a journal is something that keeps entries.

- Later on, we decide that we also want to be able to save the journal. It might be really tempting for anyone to actually add this functionality right into the Journal class itself. As below code :

```javascript
class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  save(filename) {
    fs.writeFileSync(filename, this.toString());
  }

  load(filename) {
    // load file from OS
  }

  loadFromUrl(url) {
    // load file from url
  }
}
```

- So we know that if our files aren't being saved correctly, we are not going to be looking in like 10 different places.We are going to be looking inside the persistance manager.

- So this idea of **separation of concerns** is once again this idea that you have several different concerns like persistance or post-processing, parallelism or anything un-related.

- Lastly, we separate those into separate components so as to make the entire system easier to easier to figure out, easier to manage, easier to refactor as well.
