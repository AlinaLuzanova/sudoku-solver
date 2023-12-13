// eslint-disable-next-line import/prefer-default-export
export function solveSudoku(board) {
  function innerFunc() {
    const size = 9;
    const boxSize = 3;

    const findEmpty = board => {
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (board[r][c] === '-') {
            return [r, c];
          }
        }
      }
      // const index = board.findIndex((elem => elem.findIndex((item => item === '-')) > -1))
      //   console.log(index);
      return null;
    };

    const validate = (num, pos, board) => {
      const [r, c] = pos;

      const rowsArr = board.map(el => el[c]);
      if (rowsArr.some((el, idx) => el === num && idx !== r)) {
        return false;
      }

      if (board[r].some((el, idx) => el === num && idx !== c)) {
        return false;
      }

      //Check box
      const boxRow = Math.floor(r / boxSize) * boxSize;
      const boxCol = Math.floor(c / boxSize) * boxSize;

      const res = board.some((el, idx) => el.some((item, index) => item === num && index !== c && idx !== r && index >= boxCol && index < boxCol + boxSize) && idx >= boxRow && idx < boxRow + 3);
      console.log(r, c, num);
      if (res) {
        return false;
      }

      return true;
    };

    const solve = () => {
      const currPos = findEmpty(board);

      if (currPos === null) {
        return true;
      }
      //console.log('------------------------------');
      for (let i = 1; i < size + 1; i++) {
        const currNum = i.toString();
        const isValid = validate(currNum, currPos, board);

        if (isValid) {
          const [x, y] = currPos;
          board[x][y] = currNum;

          if (solve()) {
            return true;
          }

          board[x][y] = '-';
        }
      }

      return false;
    };

    solve();
    return board;
  }
  function loadToDOM() {
    const sudokuString = innerFunc().flat();
    document.querySelectorAll('.item').forEach((el, idx) => (el.innerText = sudokuString[idx]));
  }
  loadToDOM();
  return board;
}
