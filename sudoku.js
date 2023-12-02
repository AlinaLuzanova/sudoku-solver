/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
export function showSudoku(boardString) {
  const filledSudokuArr = [];
  const rows = document.querySelectorAll('.row');
  const sudokuString = boardString.split('');
  for (let i = 0; i < 9; i++) {
    const rowChildren = rows[i].querySelectorAll('.item');
    const rowArr = [];
    filledSudokuArr.push(rowArr);
    for (let j = 0; j < 9; j++) {
      const index = i * 9 + j; // вычисляем индекс в sudokuString
      if (index < sudokuString.length) {
        rowArr.push(sudokuString[index]);
        rowChildren[j].innerText = sudokuString[index];
      }
    }
  }


  return filledSudokuArr; //массив заполненный строчкой из puzzle.txt
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
export function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
export function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).

