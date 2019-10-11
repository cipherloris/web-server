/* eslint-disable no-undef */
console.log('Client side javascript file is loaded!');

window.addEventListener('DOMContentLoaded', () => {
	const weatherForm = document.querySelector('form'),
		search = document.querySelector('input'),
		message1 = document.querySelector('#message-1'),
		message2 = document.querySelector('#message-2');
    
	weatherForm.addEventListener('submit', (e)=> {
		e.preventDefault();
		const location = search.value;
        
		message1.textContent = 'Loading..';
		message2.textContent = '';
        
		fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
			response.json().then((data) => {
				if(data.error) return message1.textContent = data.error;
				message1.textContent = data.location;
				message2.textContent = data.forecast;
				// console.log(`Location: ${data.location}`);
				// console.log(`Forecast: ${data.forecast}`);
			});
		});
	});
});