import React, { useState } from 'react';
import Display from './components/Display';
import Numberpad from './components/Numberpad';
import ResultContext from './context/context';

function App() {
	const [count, setCount] = useState([]);
	const [result, setResult] = useState('');

	return (
		<ResultContext.Provider value={{ count, setCount, result, setResult }}>
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
		</ResultContext.Provider>
	);
}

export default App;
