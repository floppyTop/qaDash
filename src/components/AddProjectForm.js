import React from 'react';
import ReactModal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}
class AddProjectForm extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
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
    };
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#212121';
        this.subtitle.style.font = 'sans-serif';
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    render() {
        return (<div>
				<button onClick={this.openModal}>Add Project</button>
			<ReactModal
	          isOpen={this.state.modalIsOpen}
	          onAfterOpen={this.afterOpenModal}
	          onRequestClose={this.closeModal}
	          style={customStyles}
	          contentLabel="Example Modal"
	        >
				<div>
				<h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
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
						<option value="responsive_basic">Responsive Basic</option>
						<option value="responsive_plus">Responsive Plus</option>
						<option value="ecomm_plus">eCommerce Plus</option>
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
			</ReactModal>
			</div>) 
    }
}
export default AddProjectForm;