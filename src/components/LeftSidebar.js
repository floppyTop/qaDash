import React from 'react';
import AddProjectForm from './AddProjectForm';
import ReactModal from 'react-modal';
import '../css/LeftSidebar.scss';

class LeftSidebar extends React.Component {
	createProject(event) {
		event.preventDefault();
		console.log('Going to add a project');
		const project = {
			name: this.name.value,
			accountManager: this.user.value,
			product: this.product.value,
			description: this.product.description
		}
		this.props.addProject(project);
		this.projectForm.reset();
		console.log(project);
	}
	render() {
		return (
			<div className="sidebar">
				<AddProjectForm 
					addProject={this.props.addProject}
				/>
			</div>
		)
	}

}

export default LeftSidebar;