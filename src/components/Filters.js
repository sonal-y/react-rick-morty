import React, { Component } from 'react';

class Filters extends Component {

        filterItems = [
        {
          value: 'human',
          checked: false,
          name: 'species'
        },
        {
          value: 'mythology',
          checked: false,
          name: 'species'
        },
        {
          value: 'other species',
          checked: false,
          name: 'species'
        },
        {
          value: 'male',
          checked: false,
          name: 'gender'
        },
        {
          value: 'female',
          checked: false,
          name: 'gender'
        },
        {
          value: 'unknown',
          checked: false,
          name: 'origin'
        },
        {
          value: 'post-apocalyptic earth',
          checked: false,
          name: 'origin'
        },
        {
          value: 'nuptia 4',
          checked: false,
          name: 'origin'
        },
        {
          value: 'other origins',
          checked: false,
          name: 'origin'
        }
      ];
        
      render() {
        return (
            <div id="sidebar" className="col-4">
                 <h2>Filters</h2>
                    <div className="form form-inline">
                        {this.filterItems.map((item,index) => ( 
                            <div key={index}>
                                <div>
                                    {(index === 0 || index === 3 || index === 5) ? item.name : ''}
                                </div>
                                
                                <label key={item.id}>
                                    <input type='checkbox' name={item.name} onChange={this.handleCheck} />
                                    {item.value}
                                </label>
                          </div>
                        ))}                    
                   </div>
            </div>               
          );
      }
    
}

export default Filters;