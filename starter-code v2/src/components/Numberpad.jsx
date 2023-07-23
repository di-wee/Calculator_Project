import React, { useContext } from 'react';
import Button from './Button';
import ResultContext from '../context/context';

const Numberpad = () => {
	const resultCtx = useContext(ResultContext);
	const { count, setCount, result, setResult } = resultCtx;
	const toString = count.toString().replaceAll(',', '');

	const handleOnClick = (event) => {
		const digit = event.target.innerHTML;
		setCount((count) => [...count, digit]);
	};

	const handleCalculation = () => {
		setResult(eval(toString));
	};

	const handleClearVal = () => {
		setCount('');
		setResult('');
	};

	const handleAddNegPos = () => {
		setCount(eval(toString) * -1);
	};

	const handlePercentage = (event) => {
		const digit = event.target.innerHTML;
		setCount((count) => [...count, digit]);
	};

	return (
		<div className="numpad">
			<div className="row row-cols-4 g-2">
				<Button
					onClick={handleClearVal}
					className="btn btn-secondary border border-white"
				>
					AC
				</Button>
				<Button
					onClick={handleAddNegPos}
					className="btn btn-secondary border border-white"
				>
					+/-
				</Button>
				<Button
					onClick={handlePercentage}
					className="btn btn-secondary border border-white"
				>
					%
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					/
				</Button>
			</div>
			<div className="row row-cols-4 g-2">
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					7
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					8
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					9
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					*
				</Button>
			</div>
			<div className="row row-cols-4 g-2">
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					4
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					5
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					6
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					-
				</Button>
			</div>
			<div className="row row-cols-4 g-2">
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					1
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					2
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					3
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					+
				</Button>
			</div>
			<div className="row row-cols-3 g-2">
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					0
				</Button>
				<Button
					onClick={handleOnClick}
					className="btn btn-secondary border border-white"
				>
					.
				</Button>
				<Button onClick={handleCalculation} className="btn btn-secondary ">
					=
				</Button>
			</div>
		</div>
	);
};

export default Numberpad;
