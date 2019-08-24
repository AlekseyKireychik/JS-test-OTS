// Task 4

// domain_two

addEventListener("DOMContentLoaded", () => {
    
	function receiveMessage(e) {
  
		if (e.origin !== "http://domain_one.html"){
			return;  
		}

		if (e.data.action === 'send'){
			localSend(e.data);
		}

		if (e.data.action === 'remove'){		  
			localRemove(e.data);
		}

		if (e.data.action === 'read'){		  
			localRead(e.data);
		}
	}
  
	function localSend(data){
	  	localStorage.setItem(data.key, data.val);
	  	console.log('written');
	  	console.log(data.callb);
	  	eval(data.callb); 
	}  
  
	function localRemove(data){
	  	localStorage.removeItem(data.key);
	  	console.log('removed');
	}
  
	function localRead(data){
	  	let text = localStorage.getItem(data.key);
	  	console.log(text);
	}
	
	window.addEventListener('message', receiveMessage);  
  
});

// domain_one

addEventListener("DOMContentLoaded", () => {	
	
	window.addEventListener ('message', function (e) {
	
		let message = e.data;
	
	});

	localStorage.setItem('1','Value01');	
	localStorage.setItem('2','Value02');
	
	console.log(localStorage.getItem('1'));
	console.log(localStorage.getItem('2'));

	const receiver = document.getElementById('receiver').contentWindow;

	const send = document.getElementById('send');
	const read = document.getElementById('read');
	const remove = document.getElementById('remove');	
	
	const objMessage = {};
	
	function sendMessage(e) {	    
	    e.preventDefault();
	    objMessage.action = 'send';
	    objMessage.key	= '3';
	  	objMessage.val = 'Value02';
	    objMessage.callb = "alert('Сообшение отправлено')";
	    receiver.postMessage(objMessage, 'http://domain-two.html');	
	}

	function removeMessage(e) {	    
	    e.preventDefault();
	    objMessage.action = 'remove';
	    objMessage.key	= '3';
	  	objMessage.val = '';
	    receiver.postMessage(objMessage, 'http://domain-two.html');
	}

	function readMessage(e) {	    
	    e.preventDefault();
	    objMessage.action = 'read';
	    objMessage.key	= '3';
	  	objMessage.val = '';
	    receiver.postMessage(objMessage, 'http://domain-two.html');
	}	
	
	send.addEventListener('click', sendMessage);
	read.addEventListener('click', readMessage);	
	remove.addEventListener('click', removeMessage);
	
});