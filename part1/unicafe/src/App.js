import { useState } from 'react';

function Statistics({ good, bad, neutral}) {
	const all = good + bad + neutral;
	const average = (good - bad) / all;
	const positive = good / all * 100;

	if(all > 0) {
		return (
			<table>
				<tbody>
					<StatisticLine text='good' value={good} />
					<StatisticLine text='neutral' value={neutral} />
					<StatisticLine text='bad' value={bad} />
					<StatisticLine text='all' value={all} />
					<StatisticLine text='average' value={average.toFixed(1)} />
					<StatisticLine text='positive' value={positive.toFixed(1)} suffix='%' />
				</tbody>
			</table>
		)
	} else {
		return (
			<div>
				No feedback given
			</div>
		)
	}
}

function StatisticLine({text, value, suffix}) {
	return (
		<tr>
			<td>{text}</td>
			<td>{value} {suffix}</td>
		</tr>
	)
}

function Button({text, clickHandler}) {
	return (
		<button onClick={clickHandler}>{text}</button>
	)
}

function App()
{

	const [good, setGood] = useState(0);
	const [bad, setBad] = useState(0);
	const [neutral, setNeutral] = useState(0);

	const addGood = () => setGood(good + 1);
	const addBad = () => setBad(bad + 1);
	const addNeutral = () => setNeutral(neutral + 1);

	return (
		<div>
			<h1>Give feedback</h1>
			<Button text='good' clickHandler={addGood}/>
			<Button text='neutral' clickHandler={addNeutral}/>
			<Button text='bad' clickHandler={addBad}/>

			<h1>statistics</h1>
			<Statistics good={good} bad={bad} neutral={neutral} />
		</div>
	);
}

export default App;
