const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

// module.exports.queryAPI = {
//     getListOfGenres: () => {
//         axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
//         .then((response)=> {
//             //do something w/ repsonce
//         })
//         .catch((err) =>{
//             console.log(err);
//         })
//     },

// };


// function(genre) {
//     axios({
//         method: 'GET',
//         api_key: API_KEY,
//         with_genres: genre,
//     }).then((response)=>{console.log(response)});
// };