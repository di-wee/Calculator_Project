import React from 'react';
import Button from './Button';

const Numberpad = () => {
	const numPad = {};

	return (
		<div className="numpad">
			<div className="row row-cols-4 g-2">
				<Button className="btn btn-secondary border border-white">AC</Button>
				<Button className="btn btn-secondary border border-white">+/-</Button>
				<Button className="btn btn-secondary border border-white">%</Button>
				<Button className="btn btn-secondary border border-white">/</Button>
			</div>
			<div className="row row-cols-4 g-2">
				<Button className="btn btn-secondary border border-white">7</Button>
				<Button className="btn btn-secondary border border-white">8</Button>
				<Button className="btn btn-secondary border border-white">9</Button>
				<Button className="btn btn-secondary border border-white">*</Button>
			</div>
			<div className="row row-cols-4 g-2">
				<Button className="btn btn-secondary border border-white">4</Button>
				<Button className="btn btn-secondary border border-white">5</Button>
				<Button className="btn btn-secondary border border-white">6</Button>
				<Button className="btn btn-secondary border border-white">-</Button>
			</div>
			<div className="row row-cols-4 g-2">
				<Button className="btn btn-secondary border border-white">1</Button>
				<Button className="btn btn-secondary border border-white">2</Button>
				<Button className="btn btn-secondary border border-white">3</Button>
				<Button className="btn btn-secondary border border-white">+</Button>
			</div>
			<div className="row row-cols-3 g-2">
				<Button className="btn btn-secondary border border-white">0</Button>
				<Button className="btn btn-secondary border border-white">.</Button>
				<Button className="btn btn-secondary ">=</Button>
			</div>
		</div>
	);
};

export default Numberpad;
