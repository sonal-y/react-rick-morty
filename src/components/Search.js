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
              <form onSubmit={this.onSubmit} className="form">
                  <input
                     type="text"
                     name="text"
                     placeholder="Search User.."
                     value={this.state.text} 
                     onChange={this.onChange} />
                   <input
                     type="submit" />
              </form>
            </div>
            );
      }
    
}

export default Search;