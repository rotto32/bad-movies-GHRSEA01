import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
  }

  componentDidMount() {
     this.getGenres();
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
     return axios.get('/movies/genres')
     .then((data) => {
       this.setState({genres: data})
       console.log(this.state);
      })
     .catch((err)=>(console.log(err)));
     
  }

  render() {
    if (this.state.genres.data !== undefined) {
      return (
        <div className="search">
          
          <button onClick={() => { this.props.swapFavorites() }}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
          <br /><br />

          {/* Make the select options dynamic from genres !!! */}
          {/* How can you tell which option has been selected from here? */}

          <select>
          {this.state.genres.data.map(({ id, name }) => { return (<option key={id} value={name}>{name}</option> )})}
            {/* <option value="theway">The Way</option>
          <option value="thisway">This Way</option>
          <option value="thatway">That Way</option> */}
          </select>
          <br /><br />

          <button>Search</button>

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