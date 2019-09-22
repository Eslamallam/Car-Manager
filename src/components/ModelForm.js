import React from 'react';

class ModelForm extends React.Component {
	constructor(props) {
		super(props);

		console.log(props);
		this.state = {
			name: props.model ? props.model.name : '',
			error: '',
		};
	}

	onNameChange = e => {
		e.preventDefault();
		const name = e.target.value;
		this.setState(() => ({ name, error: '' }));
	};

	onSubmit = e => {
		e.preventDefault();
		if (!this.state.name) {
			this.setState(() => ({
				error: 'Please enter car type',
			}));
		} else {
			this.setState(() => ({
				error: '',
			}));

			this.props.onSubmit({
				name: this.state.name,
			});
		}
	};

	render() {
		return (
			<div className="container mt-5">
				{this.state.error && <div className="alert alert-danger">{this.state.error}</div>}

				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Car type"
							onChange={this.onNameChange}
							value={this.state.name}
						/>
					</div>
					<button className="btn btn-lg btn-secondary">Save</button>
				</form>
			</div>
		);
	}
}

export default ModelForm;
