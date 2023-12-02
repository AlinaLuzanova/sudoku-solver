// Подключить функции из файла sudoku.js.
import { showSudoku, prettyBoard } from "./sudoku.js";
import { solveSudoku } from "./solved.js";

const input = document.querySelector(".input");
const btnShow = document.querySelector(".btnShow");
const btnSolve = document.querySelector(".btnSolve");

function readAndSolve() {
  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  const puzzles = document.getElementById("output").innerText;
  const rows = puzzles.split("\n").filter((line) => line !== "");

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = input.value;
  input.value = "";

  // Ограничить номер судоку максимальным числом массива с паззлами.
  if (puzzleNumber > rows.length) {
    puzzleNumber = rows.length;
  }

  // Получить желаемый судоку по индексу и вывести его в консоль.
  const puzzle = rows[puzzleNumber - 1];

  showSudoku(puzzle);

  // Использовать функцию solve из файла sudoku.js для решения судоку.
  btnSolve.addEventListener("click", () => {
    solveSudoku(showSudoku(puzzle));
    if (solveSudoku(showSudoku(puzzle))) {
      // alert(`Не смогли решить судоку №${puzzleNumber} :(, '\n')`);
      return; // Если судоку не решён, завершить работу этой функции.
    }
    console.log(`Судоку №${puzzleNumber} решён успешно!`);
  });

  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.

  // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // игрового поля в строку в желаемом формате.
}

btnShow.addEventListener("click", readAndSolve);

export default readAndSolve;
