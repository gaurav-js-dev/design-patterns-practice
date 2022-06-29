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
    // add an entry
  }

  removeEntry(index) {
    // add an entry
  }

  toString() {
    // print entries line by line
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

- And here you use the file system. But the problem is that subsequently you want to have additional interaction with the file system. You might want to load from a file name.Let's say you want to load from web. So the big problem with all of this is that you now added a second responsibility to the Journal class.

- Now, the problem with all of this is that imagine that a journal isn't the only object in your system.Imagine that you have 10 different types of objects that you want to serialize to files and load from files and maybe load from some other resource like url.How can you have common operations on all of these?

- It makes sense to take all of these operations related to persistence and make a class that's called persistance manager. You could have a class like this which has a save to file functionality for it, which might take a journal, it might take a file name, and then it would do pretty much the same thing.

- In the below code we keep everything right where our persistance functionality is.

```javascript
class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    // add an entry
  }

  removeEntry(index) {
    // add an entry
  }

  toString() {
    // print entries line by line
  }
}
// Below is the new class having single responsibility related to saving and loading files.
Journal.count = 0;

class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

let j = new Journal();
j.addEntry("I smiled today.");
j.addEntry("I ate an icecream.");
console.log(j.toString());

let p = new PersistenceManager();
let filename = "c:/temp/journal.txt";
p.saveToFile(j, filename);
```

- For eg if we run into issue if our files aren't being saved correctly, we are not going to be looking in like 10 different places for 10 objects. We are going to be looking inside the persistance manager class to fix our issue.

- So this idea of **separation of concerns** is once again this idea that you have several different concerns like persistance or post-processing, parallelism or anything un-related as different services or classes.

- Lastly, we separate those services or classes into separate components so as to make the entire system to easier to figure out, easier to manage, easier to refactor as well.
