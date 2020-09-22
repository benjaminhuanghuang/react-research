class Unit {
  constructor(element) {
    this.currentElement = element;
  }
}

class ReactTextUnit extends Unit {
  constructor(element) {
    super(element);
  }

  getMarkUp(rootId) {
    this._rootId = rootId;
    let markUp = `<span data-reactid="${rootId}">${this.currentElement}</span>`;

    return markUp;
  }
}

class ReactNativeUnit extends Unit {
  constructor(element) {
    super(element);
  }

  getMarkUp(rootId) {
    this._rootId = rootId;

    let { type, props } = this.currentElement;
    let tagStart = `<${type} data-reactid="${rootId}"`;
    let contentStr;
    for (let propName in props) {
      if (propName === "children") {
        contentStr = props[propName]
          .map((child, idx) => {
            let childInstance = createReactUnit(child);
            return childInstance.getMarkUp(`${rootId}.${idx}`);
          }).join("");
        
      } else {
        tagStart += ` ${propName}=${props[propName]}`;
      }
    }
    let tagEnd = `</${type}>`;
    return tagStart + ">" + contentStr + tagEnd;
  }
}

function createReactUnit(element) {
  if (typeof element === "string" || typeof element === "nunber") {
    return new ReactTextUnit(element);
  }
  if (typeof element === "object" && typeof element.type === "string") {
    // is react unit
    return new ReactNativeUnit(element);
  }
}

export default createReactUnit;
