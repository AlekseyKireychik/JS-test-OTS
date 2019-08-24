//task 01

// window.onload = () => {
// 	let valueOld = document.getElementById('name_input').value;
// 	document.getElementById('name_input').onchange = () => {	
// 		let valueNow = document.getElementById('name_input').value;
// 		valueNow == valueOld ?  removeColorRed() : addColorRed();
// 	};
// };	

// function addColorRed () {
// 	document.getElementById('name_input').classList.add('red');
// };

// function removeColorRed () {
// 	document.getElementById('name_input').classList.remove('red');
// };

// task02
// при загрузке страницы разберёт значения фильтров из url и расставит их по соответствующим полям

// const search = new URLSearchParams(location.search); // на самом деле нужно это, но для теста строка ниже

const search = new URLSearchParams("size=M&color=1,2&manufacturer=aaa,eee");

					// 	                     "size=M&color=1&color=2&manufacturer=aaa&manufacturer=eee"
					// http://любой_домен/filter?size=M&color=1,2&manufacturer=aaa,eee
					console.log(search);

for(const [key, value] of search) {

	const e = document.querySelector("form").elements[key];

	if(!e) continue;

	switch(e.constructor) {
		case RadioNodeList:
			for(const node of e) {
				if(node.value === value)
					node.checked = true;
			}
			break;
		case HTMLSelectElement:
			for(const option of e) {
				if(option.value === value)
					option.selected = true;
			}
			break;
		case HTMLInputElement:
			e.value = value;			
			if(e.type === "checkbox")
				e.checked = true;
			break;
	}
}

// при изменении состояния в любом инпуте... выведет в консоль аналогичный приведённому в условии url с актуальными значениями фильтров
addEventListener("input", ({ target }) => {

	if(!target.matches("form [name]")) return;

	const url = `${new URLSearchParams(new FormData(target.form))}`;

	console.log(url);

});

// task 3

// addEventListener("DOMContentLoaded", () => {	

// 	const urlItem = {

// 		urlOne: 'https://repetitora.net/api/JS/Images',
// 		urlTwo: 'https://repetitora.net/api/JS/Images'

// 	};

// 	fetch(`${urlItem.urlOne}`)
// 		.then(res => res.json())
// 		.then(data => console.log(data))
// 		.then(() => {
// 			fetch(`${urlItem.urlTwo}`)
// 				.then(res => res.json())
// 				.then(data => console.log(data))
// 				.then(() => console.log('оба ответа получены'))
// 		})		
// 		.catch(() => console.log('error...'));

// });

// Task 4

// domain_two

// addEventListener("DOMContentLoaded", () => {
    
// 	function receiveMessage(e) {
  
// 		if (e.origin !== "http://domain_one.html"){
// 			return;  
// 		}

// 		if (e.data.action === 'send'){
// 			localSend(e.data);
// 		}

// 		if (e.data.action === 'remove'){		  
// 			localRemove(e.data);
// 		}

// 		if (e.data.action === 'read'){		  
// 			localRead(e.data);
// 		}
// 	}
  
// 	function localSend(data){
// 	  	localStorage.setItem(data.key, data.val);
// 	  	console.log('written');
// 	  	console.log(data.callb);
// 	  	eval(data.callb); 
// 	}  
  
// 	function localRemove(data){
// 	  	localStorage.removeItem(data.key);
// 	  	console.log('removed');
// 	}
  
// 	function localRead(data){
// 	  	let text = localStorage.getItem(data.key);
// 	  	console.log(text);
// 	}
	
// 	window.addEventListener('message', receiveMessage);  
  
// });

// // domain_one

// addEventListener("DOMContentLoaded", () => {	
	
// 	window.addEventListener ('message', function (e) {
	
// 		let message = e.data;
	
// 	});

// 	localStorage.setItem('1','Value01');	
// 	localStorage.setItem('2','Value02');
	
// 	console.log(localStorage.getItem('1'));
// 	console.log(localStorage.getItem('2'));

// 	const receiver = document.getElementById('receiver').contentWindow;

// 	const send = document.getElementById('send');
// 	const read = document.getElementById('read');
// 	const remove = document.getElementById('remove');	
	
// 	const objMessage = {};
	
// 	function sendMessage(e) {	    
// 	    e.preventDefault();
// 	    objMessage.action = 'send';
// 	    objMessage.key	= '3';
// 	  	objMessage.val = 'Value02';
// 	    objMessage.callb = "alert('Сообшение отправлено')";
// 	    receiver.postMessage(objMessage, 'http://domain-two.html');	
// 	}

// 	function removeMessage(e) {	    
// 	    e.preventDefault();
// 	    objMessage.action = 'remove';
// 	    objMessage.key	= '3';
// 	  	objMessage.val = '';
// 	    receiver.postMessage(objMessage, 'http://domain-two.html');
// 	}

// 	function readMessage(e) {	    
// 	    e.preventDefault();
// 	    objMessage.action = 'read';
// 	    objMessage.key	= '3';
// 	  	objMessage.val = '';
// 	    receiver.postMessage(objMessage, 'http://domain-two.html');
// 	}	
	
// 	send.addEventListener('click', sendMessage);
// 	read.addEventListener('click', readMessage);	
// 	remove.addEventListener('click', removeMessage);
	
// });

	
		