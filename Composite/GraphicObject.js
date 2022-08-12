class GraphicObject {
  get name() {
    return this._name;
  }

  constructor(name = "Group " + GraphicObject.count++) {
    this.children = [];
    this.color = undefined;
    this._name = name;
  }
}
GraphicObject.count = 0;
