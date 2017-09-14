import React from 'react';
import Autosuggest from 'react-autosuggest';


class AddProjectForm extends React.Component {
	createProject(event) {
		event.preventDefault();
		console.log('Going to add a project');
		const project = {
			name: this.name.value,
			accountManager: this.accountManager.value,
			product: this.product.value,
			description: this.description.value
		}
		this.props.addProject(project);
		this.projectForm.reset();
		console.log(project);
	}

	render() {
		return (
			<div>
				<button>Add Project</button>
				<form
				ref={(input) => this.projectForm = input}
				onSubmit={(e) => this.createProject(e)}
				>
				
				<input
					ref={(input) => this.name = input}
					placeholder="Project Name"
					defaultValue="" 
					type="text"/>
				<select
					ref={(input) => this.accountManager = input}
					defaultValue="Select Account Manager"
				>
					<option value="mdavis">Michael Davis</option>
					<option value="tgarbutt">Tanner Garbutt</option>
					<option value="cprizzia">Charles Prizzia</option>
				</select>
				<select
					ref={(input) => this.product = input}
					defaultValue="Select Product Type"
				>
					<option value="mdavis">Michael Davis</option>
					<option value="tgarbutt">Tanner Garbutt</option>
					<option value="cprizzia">Charles Prizzia</option>
				</select>
				<textarea
					ref={(input) => this.description = input}
					placeholder="Product Description"
					defaultValue="" 
					type="text"
				/>
				<button type="submit">+ Add Project</button>
				</form>
			</div>
		)
	}
}

export default AddProjectForm;