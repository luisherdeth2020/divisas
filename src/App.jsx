import { fetchApi } from './fetchApi';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [moneda, setMoneda] = useState([]);
	const [amountUser, setAmountUser] = useState(0);

	const onInputChange = (e) => {
		setAmountUser(e.target.value);
	};
	const onFormSubmit = (e) => {
		e.preventDefault();
		const inputText = e.target[1].value;
		const itemToFind = moneda.find((item) => item.to === inputText);
		console.log('valor de ' + amountUser);
		console.log('valor datalist ' + inputText);
		itemToFind ? console.log(amountUser * itemToFind.amount) : 'error';
	};
	useEffect(() => {
		fetchApi().then((getMoneda) => {
			setMoneda(getMoneda);
		});
	}, []);

	return (
		<div className="App">
			<form action="#" onSubmit={onFormSubmit}>
				<label htmlFor="#">Choose your divisas</label>
				{/* <input type="number" value={amountUser} onChange={onInputChange} /> */}
				<div className="pepe">
					<input
						autoComplete="off"
						type="search"
						list="currency"
						name="currency"
						id="divisa"
						placeholder="Select your fav currency"
						onFocus={() => {
							currency.style.display = 'block';
							input.style.borderRadius = '5px 5px 0 0';
						}}
					/>
					<datalist id="currency">
						{moneda.map((item, index) => (
							<option key={index} value={item.to}></option>
						))}
					</datalist>
				</div>
				<input type="submit" />
			</form>
		</div>
	);
}

export default App;
