var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a test React app</p>
			<p>
				Here are the tools:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - The js used.
				</li>
				<li>
					<a href="http://openweathermap.com">Open weather map</a> - The api data.
				</li>
			</ul>
		</div>
	)
};

module.exports = About;
