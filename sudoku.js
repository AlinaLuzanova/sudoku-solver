export function showSudoku(boardString) {
  const regex = /.{9}/g;
  const arrString = boardString.match(regex);
  const filledSudokuArr = arrString.map(elem => elem.split(''));
  document.querySelectorAll('.item').forEach((element, index) => {
    element.innerText = boardString[index];
  });

  return filledSudokuArr; //массив заполненный строчкой из puzzle.txt
}

export default showSudoku;
