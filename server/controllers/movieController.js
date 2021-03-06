const movieModel = require('../models/movieModel.js');
const axios = require('axios');
const db = require('../../db/mongodb/index.js')
const { API_KEY } = require("../../config.js");


//Return requests to the client

//here, the req is the server request
module.exports = {
  getSearch: (req, res) => {
    // get the search genre     
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    //console.log(req.query.genre);

    axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=99`
    );

    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    //console.log("you got here");
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      console.log(response.data.genres);
      db. 
      res.send(response.data.genres);
    })
    .catch((err)=> {
      console.log(err);
      res.end();
    });
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

    // send back
  },
  saveMovie: (req, res) => {

  },
  deleteMovie: (req, res) => {

  }
}