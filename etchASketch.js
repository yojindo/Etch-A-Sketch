const resetButton = document.getElementById('reset');
const randomColorButton = document.getElementById('color');
const inputNumberInput = document.getElementById('box-input-count');
const containerDiv = document.getElementById('container');

let cellCount = getComputedStyle(document.documentElement).getPropertyValue('--cell-count');
let toggle = false

//create the grid table
const createTable = (gridSize) => {
  for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
      let cell = document.createElement('div');
		cell.classList.add('cell');
		cell.addEventListener('mouseover', () => {
		if(!toggle) {
			cell.style.backgroundColor = 'black';
		} else {
			cell.style.backgroundColor = randomColor();
				}
			})
		containerDiv.appendChild(cell);	
		}		
    }
}

createTable(cellCount)

//reset the grid and change to number of cells given input box
const resetGrid = () => {
	let cells = document.getElementsByClassName('cell')
	document.documentElement.style.setProperty('--cell-count',inputNumberInput.value);
	const array = [...cells];
	array.forEach(cell => cell.remove());
	cellCount = inputNumberInput.value
	createTable(cellCount);
}

//create toggle function
const toggleSwitch = () => {
	if (toggle === false) {
		toggle = true;
	} else {
		toggle = false
	}
}

//random color generator
const randomColor = () => {
  let r,g,b;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`
}

//button events
resetButton.addEventListener('click', resetGrid)
randomColorButton.addEventListener('click', toggleSwitch)

