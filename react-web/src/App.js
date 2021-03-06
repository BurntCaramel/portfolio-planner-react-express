import React, { Component } from 'react';
import './App.css';
import ProjectList from './components/ProjectList'

class App extends Component {
  state = {
    projects: null
  }

  render() {
    const { projects } = this.state
    // const projects = this.state.projects

    return (
      <div className="App">
      {
        // ![] = false
        // !![] = true (loaded)
        // !null = true
        // !!null = false (still waiting to load)
        !!projects ? (
          <ProjectList items={ projects } />
        ) : (
          'Loading projects…'
        )
      }
      </div>
    );
  }

  // Run after our component instance first appears on screen
  componentDidMount() {
    // Load projects from API
    fetch('/api/projects')
      // Parsing the JSON into JavaScript objects
      .then(res => res.json())
      // Update our component’s state with the loaded projects
      .then(json => {
        // Changing the state will re-render the component
        this.setState({
          projects: json
        })
      })
  }
}

export default App;
