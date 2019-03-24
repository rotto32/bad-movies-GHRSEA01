import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      selected: "Action"
    };
  }

  componentDidMount() {
     this.getGenres();
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
     return axios.get('/movies/genres') //why am I returning this here?
     .then((data) => {
       this.setState({genres: data})
       //console.log(this.state);
      })
     .catch((err)=>(console.log(err)));
     
  }

  handleGenreChange(e) {
    // console.log(e.target)
    this.setState({selected: e.target.value})
    //console.log(this.state.selected)
  }

  getBadMoviesByGenre() {
    axios.get(`/movies/search?genre=${this.state.selected}`)
    .then((data) => {

    })
    .catch((err) => {
      console.log(err);
    })

  }


  render() {
    if (this.state.genres.data !== undefined) {
      return (
        <div className="search">
          
          <button onClick={() => { this.props.swapFavorites() }}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
          <br /><br />

          {/* Make the select options dynamic from genres !!! */}
          {/* How can you tell which option has been selected from here? */}

          <select value={this.state.selected} onChange={(e)=>{this.handleGenreChange(e)}}>
          {this.state.genres.data.map(({ id, name }) => { return (<option key={id} id={id} value={name}>{name}</option> )})}
            {/* <option value="theway">The Way</option>
          <option value="thisway">This Way</option>
          <option value="thatway">That Way</option> */}
          </select>
          <br /><br />

          <button onClick={(e)=>{this.getBadMoviesByGenre(e)}}>Search</button>

        </div>
      );
    } else {
      return (
        <div className="search">
        </div>
      );

    }

  }
}

export default Search;