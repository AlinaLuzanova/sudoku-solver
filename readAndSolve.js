// Подключить функции из файла sudoku.js.
import { showSudoku, isSolved, prettyBoard } from './sudoku';

const input = document.querySelector('input');
const btnShow = document.querySelector('.buttonShow');
const btnSolve = document.querySelector('.buttonSolve');

function readAndSolve(error, fileData) {
  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.
  if (error) {
    throw error;
  }

  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  const puzzles = fileData
    .split('\n')
    .filter((line) => line !== '');

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = input.value;

  // Ограничить номер судоку максимальным числом массива с паззлами.
  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  // Получить желаемый судоку по индексу и вывести его в консоль.
  const puzzle = puzzles[puzzleNumber - 1];
  btnShow.addEventListener('click',()=>{
    //const solvedPuzzle = sudoku.showSudoku(puzzle);
    showSudoku(puzzle)
  })

  console.log(`Решаем судоку №${puzzleNumber}:`);
  console.log(puzzle, '\n');

  //const
  // Использовать функцию solve из файла sudoku.js для решения судоку.
  //const solvedPuzzle = sudoku.solve(puzzle);


  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  if (isSolved(solvedPuzzle)) {
    console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
    return; // Если судоку не решён, завершить работу этой функции.
  }

  // Код ниже сработает, только если проверка решения судоку прошла успешно.
  console.log(`Судоку №${puzzleNumber} решён успешно!`);

  // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // игрового поля в строку в желаемом формате.
  console.log(prettyBoard(solvedPuzzle), '\n');
}

export default readAndSolve;
