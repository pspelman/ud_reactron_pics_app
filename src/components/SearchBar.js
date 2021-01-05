import React, {Component} from 'react';


class SearchBar extends Component {
  state = {term: ''}

  onFormSubmit = (event) => {
    event.preventDefault()
    // console.log(`onFormSubmit -> let's search for: `, this.state.term)
    this.props.onSearchSubmit(this.state.term)
  }


  render() {
    return (
      <div className={"ui segment"}>
        <label>Search Bar</label>
        <form className={"ui form"} action="/"
              onSubmit={this.onFormSubmit}
              // onSubmit={(event) => this.onFormSubmit(event)} // Note: this can be used when onFormSubmit is not an arrow function
              onClick={e => e.preventDefault()}
        >
          <div className="field">
            <input
              type="text"
              name={'searchTerm'}
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}
// class SearchBar extends Component {
//   onInputChange(event) {
//     console.log(`user typed: `, event.target.value)
//   }
//   render() {
//     return (
//       <div className={"ui segment"}>
//         <label>Search Bar</label>
//         <form className={"ui form"} action="/"
//               onSubmit={e => e.preventDefault()}
//               onClick={e => e.preventDefault()}
//         >
//           <div className="field">
//             <input
//               type="text"
//               name={'searchTerm'}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

SearchBar.propTypes = {};

export default SearchBar;
