class Buffer extends Array {
  constructor(width = 30, height = 20) {
    super();
    this.width = width;
    this.height = height;
    this.alloc(width * height);
  }

  write(text, position = 0) {
    // write to the buffer
  }
}

class Viewport {
  constructor(buffer = new Buffer()) {
    this.buffer = buffer;
    this.offset = 0;
  }

  // high-level overview.
  append(text, pos) {
    this.buffer.write(text, pos + this.offset);
  }

  getCharAt(index) {
    return this.buffer[this.offset + index];
  }
}

class Console {
  constructor() {}

  // high-level
  write(text) {}

  // low-level
  getCharAt(index) {}
}
