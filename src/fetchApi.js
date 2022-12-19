function getArray(base,rates) {
	const items = Object.entries(rates)
	const moneda = items.map((moneda) => ({
		from: base,
		to: moneda[0],
		amount: moneda[1],
	}));

	return moneda;
}

export async function fetchApi() {
	let api = 'https://api.exchangerate.host/latest';
	const response = await fetch(api);
	const responseJson = await response.json();

const {base = 'EUR',rates={} } = responseJson
return getArray(base, rates)
	
	

}
