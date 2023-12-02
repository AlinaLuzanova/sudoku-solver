// Подключить функции из файла sudoku.js.
import { showSudoku } from './sudoku.js';
import { solveSudoku } from './solved.js';

document.getElementById('inputfile').addEventListener('change', function () {
  let fr = new FileReader();
  fr.onload = function () {
    document.getElementById('output').textContent = fr.result;
  };
  fr.readAsText(this.files[0]);
});

const input = document.querySelector('.input');
const btnShow = document.querySelector('.btnShow');
const btnSolve = document.querySelector('.btnSolve');

function readAndSolve() {
  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  const puzzles = document.getElementById('output').innerText;
  const rows = puzzles.split('\n').filter(line => line !== '');

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = input.value;
  input.value = '';

  // Ограничить номер судоку максимальным числом массива с паззлами.
  if (puzzleNumber > rows.length) {
    puzzleNumber = rows.length;
  }

  // Получить желаемый судоку по индексу
  const puzzle = rows[puzzleNumber - 1];

  showSudoku(puzzle);

  btnSolve.addEventListener('click', () => {
    solveSudoku(showSudoku(puzzle));
  });
}

btnShow.addEventListener('click', readAndSolve);

export default readAndSolve;
