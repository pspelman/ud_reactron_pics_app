import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import SearchBar from "./SearchBar"


class App extends React.Component {
  onSearchSubmit(term) {
    console.log(`executing search for `, term)
  }

  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="ui container">
            <SearchBar onSearchSubmit={this.onSearchSubmit}/>
          </div>
          <br/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            What would you like to see?
          </a>
        </header>
      </div>
    )

  }
}

export default App
