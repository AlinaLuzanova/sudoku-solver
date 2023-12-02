// Подключить модуль работы с файловой системой.
// Подключить функцию readAndSolve из соответствующего файла.
import fs from './fs'
import readAndSolve from './readAndSolve.js';

// Все судоку для решения доступны в файле puzzles.txt.
// Прочесть файл puzzles.txt в кодировке 'utf-8' и передать его содержимое в функцию readAndSolve.
fs.readFile(
  './puzzles.txt',
  'utf-8',
  readAndSolve,
);
