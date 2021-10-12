
const buttons = document.querySelectorAll('.button');
const resultBox = document.getElementById('result-box');

for (const button of buttons) {
	if (button.classList.contains('equals')) {
		button.addEventListener('click', () => {
			resultBox.innerHTML = eval(resultBox.innerHTML);
		})
		continue;
	}
	if (button.classList.contains('ac')) {
		button.addEventListener('click', () => {
			resultBox.innerHTML = "";
		});
		continue;
	}
	button.addEventListener('click', () => {
		resultBox.innerHTML += button.innerHTML;
	});
}
