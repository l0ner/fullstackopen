function Header(props)
{
	return (
		<h1>{props.title}</h1>
	)
}

function Part(props)
{
	return (
		<p>{props.title} {props.exercises}</p>
	)
}

function Content(props)
{
	return (
		<div>
			<Part title={props.title} />
			<Part title={props.title} />
			<Part title={props.title} />
		</div>
	)
}

function Total(props) {
	return (
		<p>Number of exercises {props.total}</p>
	)
}

function App()
{
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React';
	const exercises1 = 10;
	const part2 = 'Using props to pass data';
	const exercises2 = 7;
	const part3 = 'State of a component';
	const exercises3 = 14;

	const name = "Peter";
	const age = 10;

	return (
		<div>
			<Header title={course} />
			<Content title={part1} exercises={exercises1} />
			<Total total={exercises1 + exercises2 + exercises3} />
		</div>
	);
}

export default App;
