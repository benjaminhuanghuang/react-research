class Unit {
  constructor(element){
    this.currentElement = element;
  }
}

class ReactTextUnit extends Unit {
  constructor(element){
    super(element);
  }

  getMarkUp(rootId){
    this._rootId = rootId;
    let markUp = `<span data-reactid="${rootId}">${this.currentElement}</span>`;

    return markUp;
  }

}


function createReactUnit(element) {

  if(typeof element === 'string' || typeof element === 'nunber'){
    return new ReactTextUnit(element);
  }

}


export default createReactUnit;