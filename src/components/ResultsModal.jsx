import React from "react";

// TODO: Import React Bootstrap components

// TODO: Convert to use React Bootstrap components
function ModalResults(props) {
	return (
		<div>
			<p>
				Monthly payment:{" "}
				<span className="fw-bold fs-4">{props.monthlyPayment}</span>
			</p>
			<p>
				Total interest:{" "}
				<span className="fw-bold fs-4">{props.totalInterest}</span>
			</p>
			<p>
				Total payment:{" "}
				<span className="fw-bold fs-4">{props.totalPayment}</span>
			</p>
		</div>
	);
}

export default ModalResults;
