class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c} : ${text}`;
    this.entries[c] = entry;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }
}

Journal.count = 0;

let j = new Journal();
j.addEntry("I am happy today");
j.addEntry("I did party last night");
console.log(j.toString());
