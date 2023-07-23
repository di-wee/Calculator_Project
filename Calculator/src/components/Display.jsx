import React, { useContext } from 'react';
import ResultContext from '../context/context';

const Display = () => {
	const resultCtx = useContext(ResultContext);
	const { result, setResult, count, setCount } = resultCtx;

	return (
		<div className="output">
			<div className="previousInput">{count}</div>
			<div className="result">{result}</div>
		</div>
	);
};

export default Display;
