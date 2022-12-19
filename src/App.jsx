import { fetchApi } from './fetchApi';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [moneda, setMoneda] = useState([]);
	const [amountUser, setAmountUser] = useState(0);

	const cantidad = (e) => {
		setAmountUser(e.target.value);
	};
	const onFormSubmit = (e) => {
		e.preventDefault();
		const inputText = e.target[0].value;
		const itemToFind = moneda.find((item) => item.to === inputText);
		console.log(amountUser);
		console.log(inputText);
		itemToFind ? console.log(3 * itemToFind.amount) : 'error';
	};
	useEffect(() => {
		fetchApi().then((getMoneda) => {
			setMoneda(getMoneda);
		});
	}, []);
	// const [amountUser, setAmountUser] = useState('')
	// if (itemToFind) console.log(cantidad * itemToFind.amount);
	return (
		<div className="App">
			<form action="#" onSubmit={onFormSubmit}>
				<label htmlFor="#">Choose your divisas</label>
				{/* <input type="number" value={amountUser} onChange={cantidad} /> */}
				<input type="text" list="divisas" name="divisas" id="divisa" />
				<datalist id="divisas">
					<option value="USD"></option>
					<option value="AED"></option>
				</datalist>
			</form>
			{/* <div id="result"></div>
			{/* {moneda.find((item) => (item.to === usd ? 'bien' : 'mal'))} */}
			{/* {moneda.find((item) => console.log(item.to))} */}
			{/* <form action="#">
				<label htmlFor="#">Choose your divisas</label>
				<input
					type="text"
					value={amountUser}
					onChange={(e) => {
						setAmountUser(e.target.value);
					}}
					list="divisas"
					name="divisas"
					id="divisa"
				/>
				<datalist id="divisas">
					<option value="USD"></option>
					<option value="AED"></option>
				</datalist> */}
			{/* {itemToFind && <div>{cantidad * itemToFind.amount}</div>} */}
			{/* </form> */}
		</div>
	);
}

export default App;
