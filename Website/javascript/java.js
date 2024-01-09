const url = 'https://one-piece2.p.rapidapi.com/v2/getAllCharacters';
const options = {
	method: 'GET',
	headers: {
		token: 'ab84ad27eb9fe47b625069a7f0a4833fb92439639d9a57f7a56ca60bc4a8fbc6',
		'X-RapidAPI-Key': '9227245897msh42dfee93412f3e9p1cbc04jsn3aeb16c37cb5',
		'X-RapidAPI-Host': 'one-piece2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}