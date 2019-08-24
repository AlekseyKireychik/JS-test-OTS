// task 3

addEventListener("DOMContentLoaded", () => {	

	const urlItem = {

		urlOne: 'https://repetitora.net/api/JS/Images',
		urlTwo: 'https://repetitora.net/api/JS/Images'

	};

	fetch(`${urlItem.urlOne}`)
		.then(res => res.json())
		.then(data => console.log(data))
		.then(() => {
			fetch(`${urlItem.urlTwo}`)
				.then(res => res.json())
				.then(data => console.log(data))
				.then(() => console.log('оба ответа получены'))
		})		
		.catch(() => console.log('error...'));

});