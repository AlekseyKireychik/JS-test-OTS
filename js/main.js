//task 01

window.onload = () => {
	let valueOld = document.getElementById('name_input').value;
	document.getElementById('name_input').onchange = () => {	
		let valueNow = document.getElementById('name_input').value;
		valueNow == valueOld ?  removeColorRed() : addColorRed();
	};
};	

function addColorRed () {
	document.getElementById('name_input').classList.add('red');
};

function removeColorRed () {
	document.getElementById('name_input').classList.remove('red');
};