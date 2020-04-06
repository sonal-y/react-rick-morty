import React, { Component } from 'react';

class Search extends Component {

    state= {
        text: ''
    };

    onChange = (e) => this.setState({ text: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchCharacters(this.state.text);
      //  this.setState({ text: ''});
    };
    

     render() {
        return (
            <div>
              <h3>Search by Name</h3>
              <form onSubmit={this.onSubmit} className="form">
                  <input
                     type="text"
                     name="text"
                     value={this.state.text} 
                     onChange={this.onChange} />
                   <input
                     type="submit" value="Search" />
              </form>
            </div>
            );
      }
    
}

export default Search;