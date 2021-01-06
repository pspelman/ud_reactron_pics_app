import React from 'react'
import logo from '../logo.svg'
import unsplash from "../api/unsplash";
import '../App.css'
import SearchBar from "./SearchBar"
import ImageList from "./ImageList";


class App extends React.Component {
  state = {
    images: [],
    imagesByKeyword: {}
  }
  onSearchSubmit = async (term) => {
    console.log(`executing search for `, term)
    const photoSearchStub = "search/photos"
    const response = await unsplash.get(`/${photoSearchStub}`, {
      params: {query: term},
    })
    this.setState({images: response.data.results})
    console.log(`images: `, response.data.results)
    return response.data.results
  }

  render(props) {
    let searchResultsCount = this.state.images.length ? `Found ${this.state.images.length} images` : ''
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="ui container">
            <SearchBar onSearchSubmit={this.onSearchSubmit}/>
            {searchResultsCount}
          </div>
          What would you like to see?
        </header>
          <br/>
          <ImageList images={this.state.images}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
      </div>
    )

  }
}

export default App

