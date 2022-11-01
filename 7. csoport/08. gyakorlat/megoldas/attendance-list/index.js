const table = document.querySelector('table');

function xyCoord(td) {
  return {
    x: td.cellIndex,
    y: td.parentNode.sectionRowIndex,
  }
}

document.addEventListener('keydown', function (e) {
  // Actual position
  const actCheckbox = document.querySelector('table input[type="checkbox"]:focus')
  if (!actCheckbox) return;

  const td = actCheckbox.closest('td');
  let {x, y} = xyCoord(td);

  if (e.key === 'ArrowLeft') {
    x--;
    if (x < 1) {
      x = 7
    }
  }
  else if (e.key === 'ArrowRight') {
    x++;
    if (x > 7) {
      x = 1;
    }
  }
  else if (e.key === 'ArrowUp') {
    y--;
    if (y < 0) {
      y = 2
    }
  }
  else if (e.key === 'ArrowDown') {
    y++;
    if (y > 2) {
      y = 0;
    }
  }

  const nextCheckbox = document.querySelector(`table tbody tr:nth-of-type(${y+1}) td:nth-of-type(${x+1}) input`)
  nextCheckbox.focus();
})

table.addEventListener('click', function (e) {
  const td = e.target.closest('td');
  if (this.contains(td)) {
    colorTable();
    const checkbox = td.firstElementChild;
    checkbox.focus();
  }
})

function colorTable() {
  const checkboxes = document.querySelectorAll('table input[type="checkbox"]')
  for (const c of checkboxes) {
    const td = c.parentNode;
    td.classList.toggle('present', c.checked);
  }
}
colorTable();