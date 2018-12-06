'use strict';

const GAME = document.querySelector('.game');
const BOARD = GAME.querySelector('.board');
const BOARD_SIZE = 8;

let boardWidth = parseInt(window.getComputedStyle(BOARD).width);

class Chessman {
  constructor(x, y, unicode) {
    this.x = x;
    this.y = y;
    this.unicode = unicode;

    this.DOMentity = document.createElement("span");
    this.DOMentity.innerHTML = this.unicode;
    this.DOMentity.style.cursor = 'pointer';

    this.setPosition(this.x, this.y);

    this.DOMentity.addEventListener('mouseover', () => {
      this.DOMentity.classList.add('blink');
    });
    this.DOMentity.addEventListener('mouseout', () => {
      this.DOMentity.classList.remove('blink');
    });
  }

  setPosition(x, y) {
    const cell = BOARD.querySelector(`#${x + y}`);
    cell.appendChild(this.DOMentity);
  }

  turn(x, y) {}
}

class WhitePawn extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9817;');
  }
}

class BlackPawn extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9823;');
  }
}

class WhiteKing extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9812;');
  }
}

class BlackKing extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9818;');
  }
}

class WhiteQueen extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9813;');
  }
}

class BlackQueen extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9819;');
  }
}

class WhiteHorse extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9816;');
  }
}

class BlackHorse extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9822;');
  }
}

class WhiteBishop extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9815;');
  }
}

class BlackBishop extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9821;');
  }
}

class WhiteRook extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9814;');
  }
}

class BlackRook extends Chessman{
  constructor(x, y) {
    super(x, y, '&#9820;');
  }
}

function createBoard() {

  let size = boardWidth/(BOARD_SIZE + 1);
  let rowNum = (BOARD_SIZE + 1);

  for (let x = 0; x < BOARD_SIZE + 2; x++) {
    let colNumText = 65, colNum = 64; // коды символов для буквенной нумерации
    let row = document.createElement('div');

    row.classList.add('row');
    BOARD.appendChild(row);

    for (let y = 0; y < BOARD_SIZE + 2; y++) {
      let cell = document.createElement('div');

      cell.style.width = size + 'px';
      cell.style.height = size + 'px';
      cell.style.backgroundColor = '#7C3E2D';
      cell.style.lineHeight = size + 'px';
      cell.style.fontSize = size / 50 + 'em';

      if (x === 0 || x === BOARD_SIZE + 1) {
        cell.style.height = size / 2 + 'px';

        if (y !== 0 && y !== BOARD_SIZE + 1) {
          cell.style.color = 'beige';
          cell.style.lineHeight = size / 2 + 'px';
          cell.textContent = String.fromCharCode(colNumText++);
        }
      }

      if (y === 0 || y === BOARD_SIZE + 1) {
        cell.style.width = size / 2 + 'px';

        if (x !== 0 && x !== BOARD_SIZE + 1) {
          cell.style.color = 'beige';
          cell.textContent = rowNum;
        }
      }

      if (x !== 0 && x !== BOARD_SIZE + 1 && y !== 0 && y !== BOARD_SIZE + 1) {
        if ((x + y) % 2 === 0) {
          cell.style.backgroundColor = 'beige';
        } else {
          cell.style.backgroundColor = 'sienna';
        }
        colNum++;
        cell.id = `${String.fromCharCode(colNum) + rowNum}`;
        cell.style.fontSize = size / 20 + 'em';
      }
      row.appendChild(cell);
    }
    rowNum--;
  }
}
