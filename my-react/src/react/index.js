
import $ from 'jquery'
import createReactUnit from './util'

import createElement from './element'


let React = {
  render,
  nextRootIndex:0,
  createElement
}

// 
function render(element, container)
{
  let createReactUnitInstance = createReactUnit(element);

  let markUp = createReactUnitInstance.getMarkUp(React.nextRootIndex);

  $(container).html(markUp);
}


export default React;

