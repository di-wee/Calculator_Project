import React from 'react';
import Display from './components/Display';
import Numberpad from './components/Numberpad';

function App() {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-sm-3">
					<Display />
				</div>
				<div className="w-100"></div>
				<div className="col-sm-3">
					<Numberpad />
				</div>
			</div>
		</div>
	);
}

export default App;
