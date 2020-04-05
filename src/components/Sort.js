import React, { Component } from 'react';

class Sort extends Component {
    
    handleChange = (e) => {
        this.props.sortCharacters(e.target.value);
    }
    
     render() {
        return (
            <div>
                <label htmlFor="characterId">Sort by ID:</label>
                 <select id="characterId" onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>              
            </div>
            );
      }
    }
    


export default Sort;