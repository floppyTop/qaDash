import React, { Component } from 'react';
import logo from '../logo.svg';
import LeftSidebar from './LeftSidebar';

class App extends React.Component {
  constructor() {
    super();
    this.addProject = this.addProject.bind(this);

    this.state = {
      projects: {}
    }
  }

  addProject(project) {
    //Updated State
    const projects = {...this.state.projects};
    //Add in our new project
    const timestamp = Date.now();
    projects[`project-${timestamp}`] = project;
    //Set State
    this.setState({ projects });
  }




  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <LeftSidebar
          projects={this.state.projects}
          addProject={this.addProject}
        />
      </div>
    );
  }
}

export default App;
