import React from 'react';

const SelectedFilter = (props) => {
     
        return (
            <div>
                  <h2>Selected Filters</h2>
                  {props.checkedFilter.map(filter => {
                       return filter;
                  })}            
            </div>
            );
      }
    


export default SelectedFilter;