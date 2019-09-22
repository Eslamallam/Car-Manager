import React from 'react';

class CarForm extends React.Component {
	constructor(props) {
		super(props);

		console.log(props);
		this.state = {
			name: props.car ? props.car.name : '',
			horsepower: props.car ? props.car.horsepower : '',
			price: props.car ? props.car.price : '',
			error: '',
		};
	}

	onNameChange = e => {
		e.preventDefault();
		const name = e.target.value;
		this.setState(() => ({ name, error: '' }));
	};

	onHorsePowerChange = e => {
		e.preventDefault();
		const horsepower = e.target.value;
		this.setState(() => ({ horsepower, error: '' }));
	};

	onPriceChange = e => {
		e.preventDefault();
		const price = e.target.value;
		this.setState(() => ({ price, error: '' }));
	};

	onSubmit = e => {
		e.preventDefault();
		if (!this.state.name || !this.state.horsepower || !this.state.price) {
			this.setState(() => ({
				error: 'Please all fields are required',
			}));
		} else {
			this.setState(() => ({
				error: '',
			}));

			this.props.onSubmit({
				name: this.state.name,
				horsepower: this.state.horsepower,
				price: this.state.price,
			});
		}
	};

	render() {
		return (
			<div className="container m-5">
				{this.state.error && <div className="alert alert-danger ">{this.state.error}</div>}

				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input
							className="form-control"
							type="text"
							placeholder="Car name"
							onChange={this.onNameChange}
							value={this.state.name}
						/>
					</div>
					<div className="form-group">
						<input
							type="number"
							className="form-control"
							placeholder="Horse power"
							onChange={this.onHorsePowerChange}
							value={this.state.horsepower}
						/>
					</div>
					<div className="form-group">
						<input
							type="number"
							className="form-control"
							placeholder="Price"
							onChange={this.onPriceChange}
							value={this.state.price}
						/>
					</div>
					<button className="btn btn-lg btn-secondary">Save</button>
				</form>
			</div>
		);
	}
}

export default CarForm;
