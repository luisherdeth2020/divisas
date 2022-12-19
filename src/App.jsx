import { fetchApi } from './fetchApi';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [moneda, setMoneda] = useState([]);
	const cantidad = 3;
	let usd = 'AFN';

	const itemToFind = moneda.find((item) => item.to === usd);
	console.log(itemToFind);
	
	useEffect(() => {
		fetchApi().then((getMoneda) => {
			setMoneda(getMoneda);
		});
	}, []);
	return (
		<div className="App">
			{/* <form action="#">
				<label htmlFor="#">Choose your divisas</label>
				<input type="text" list="divisas" name="divisas" id="divisa" />
				<datalist id="divisas">
					<option value="USD"></option>
					<option value="AED"></option>
				</datalist>
			</form> */}

			{/* <div id="result"></div> */}

			{/* {moneda.find((item) => (item.to === usd ? 'bien' : 'mal'))} */}
			{/* {moneda.find((item) => console.log(item.to))} */}
		</div>
	);
}

export default App;
