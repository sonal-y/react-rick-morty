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
    characterList: []
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
    (sortBy === 'asc') ?
    this.state.characters.sort((a,b) => a.id - b.id ) :
    this.state.characters.sort((a,b) => b.id - a.id );
  }

  render() {
    return (
      <div className="App">
        <h1>Rick and Morty</h1>
        
        <div className="container">
          <Filters />
          <div className="main">
              <SelectedFilter />
              <Search searchCharacters={this.searchCharacters}/>
              <Sort sortCharacters={this.sortCharacters}/>
              <Characters loading={this.state.loading} characters={this.state.characters} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
