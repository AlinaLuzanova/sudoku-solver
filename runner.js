// Подключить модуль работы с файловой системой.
// Подключить функцию readAndSolve из соответствующего файла.
//import fs from './fs'
import readAndSolve from './readAndSolve.js';

document.getElementById('inputfile').addEventListener('change', function () {
  let fr = new FileReader();
  fr.onload = function () {
    document.getElementById('output').textContent = fr.result;
  };
  fr.readAsText(this.files[0]);
});
