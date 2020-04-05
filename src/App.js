import React, { Component } from 'react';
import axios from 'axios';
import Characters from './components/Characters';
import './style.scss';
import Filters from './components/Filters';
import SelectedFilter from './components/SelectedFilter';
import Search from './components/Search';
import Sort from './components/Sort';

class App extends Component {

  state = {
    characters: [],
    loading: false,
    characterList: [],
    selectedCharacters: [],
    checkedFilter: []
  }

  async componentDidMount() {
    this.setState({ loading:true });
    const res = await axios.get('https://rickandmortyapi.com/api/character/');
    this.setState({ characters: res.data.results , loading: false , characterList: res.data.results});
    
  }

  searchCharacters = (text) => {
    this.setState({ loading:true });
    let characters = this.state.characterList.filter(o => o.name.toLowerCase().includes(text));
    this.setState({ characters: characters , loading: false });;
  }

  sortCharacters = (sortBy) => {
    if(!sortBy) return;
    (sortBy === 'asc') ?
    this.setState({ characters: this.state.characters.sort((a,b) => a.id - b.id )}) :
    this.setState({ characters: this.state.characters.sort((a,b) => b.id - a.id )});
  }

  filterCharacters = (e) => {
      if (e.target.checked) {
            const currState = [...this.state.characterList];
            const value = e.target.value;
            const newState = currState.filter(character => typeof(character[e.target.name]) == 'string' ? (character[e.target.name].toLowerCase() == e.target.value):(character[e.target.name].name.toLowerCase() == e.target.value));
            this.setState(prevState => ({
                characters: prevState.selectedCharacters.length >= 1 && prevState.characters.length <= prevState.characterList.length ? [...newState, ...prevState.selectedCharacters] : newState,
                selectedCharacters:  [...newState, ...prevState.selectedCharacters],
                checkedFilter: Array.from(new Set([...prevState.checkedFilter,value]))
            }));
        } else {
          if(this.state.characters.length === 1) {
            this.setState ({ characters: this.state.characterList, selectedCharacters: [] });  
          } else {
            const currState = [...this.state.characters];
            const value = e.target.value;
            const newState = currState.filter(character => character[e.target.name].toLowerCase() != e.target.value);
            this.setState(prevState => ({ 
              characters:newState,
              selectedCharacters: [],
              checkedFilter: prevState.checkedFilter.filter(item => item != value)
            }));
          }
        }
  };

  render() {
    return (
      <div className="App">
        <h1>Rick and Morty</h1>
        
        <div className="container">
          <Filters filterCharacters={this.filterCharacters} />
          <div className="main">
              <SelectedFilter checkedFilter={this.state.checkedFilter} />
              <div className="filter-secondary">
                <Search searchCharacters={this.searchCharacters}/>
                <Sort sortCharacters={this.sortCharacters}/>
              </div>
              <Characters loading={this.state.loading} characters={this.state.characters} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
