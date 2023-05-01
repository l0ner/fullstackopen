function Header({ title })
{
	return (
		<h1>{title}</h1>
	);
}

function Part({ part })
{
	return (
		<p>{part.name}: {part.exercises}</p>
	);
}

function Content({ parts })
{
	// console.log(parts);
	return (
		<div>
			<Part part={parts[0]} />
			<Part part={parts[1]} />
			<Part part={parts[2]} />
		</div>
	);
}

function Total({ parts })
{
	let total = parts.map(part => part.exercises).reduce((p, n) => p + n);

	return (
		<p>Number of exercises: {total}</p>
	);
}

function App()
{

	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			}
		]
	};

	return (
		<div>
			<Header title={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
}

export default App;
