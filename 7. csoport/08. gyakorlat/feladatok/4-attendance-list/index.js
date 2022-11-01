const table = document.querySelector('table');

function xyCoord(td) {
  return {
    x: td.cellIndex,
    y: td.parentNode.sectionRowIndex,
  }
}

function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);

    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

