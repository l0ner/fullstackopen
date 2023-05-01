import { useState } from 'react';

function App()
{
	const anecdotes_db = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.',
	];

	const [selected, setSelected] = useState(0);
	const [anecdotes, setVotes] = useState(anecdotes_db.map(a => ({ text: a, votes: 0 })));
	const [highestScore, setHighestScore] = useState(0);

	const nextAnecdote = () =>
	{
		const index = Math.floor(Math.random() * anecdotes.length);
		setSelected(index);
	};

	const anecdoteVote = () =>
	{
		const newVotes = [...anecdotes];
		newVotes[selected].votes += 1;
		setVotes(newVotes);

		const votes = newVotes.map(v => v.votes);
		const max = Math.max(...votes);
		setHighestScore(votes.indexOf(max));
	};

	return (
		<div>
			<h1>Anecdote of the day</h1>
			{anecdotes[selected].text}<br />
			has {anecdotes[selected].votes} votes<br />
			<button onClick={anecdoteVote}>vote</button>
			<button onClick={nextAnecdote}>next anecdote</button>
			<h1>Anecdote with most votes</h1>
			{anecdotes[highestScore].text}
		</div>
	);
}

export default App;
