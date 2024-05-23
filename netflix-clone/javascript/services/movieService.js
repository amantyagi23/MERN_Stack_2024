import Movie from "../model/movie.js";
import MovieDetail from "../model/movieDetail.js";


const MOVIESERVICE = {
    movieList:{
        popular:[],
        top_rated:[],
        upcoming:[],
        searchMovie:[],
    },
    getMovieList:async function (type){

        const response = await fetch(  `https://api.themoviedb.org/3/movie/${type}?api_key=664e565dee7eaa6ef924c41133a22b63`);
        const data = await response.json();
        console.log(data);
        data.results.forEach(movie => {
            const movieObj = new Movie(movie.id,movie.original_title,movie.poster_path);
        this.movieList[type].push(movieObj);
        });
        console.log(this.movieList);
        return this.movieList[type]
    },

    getMovieDetail:async function (movieId){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=664e565dee7eaa6ef924c41133a22b63`);

        const data = await response.json(); 

        const movieDetail = new MovieDetail(data);
        return movieDetail.props;
    },
    getMovieBySearch:async function (query){

        const response = await fetch(  `https://api.themoviedb.org/3/search/movie?api_key=664e565dee7eaa6ef924c41133a22b63&query=${query}`);
        const data = await response.json();
        console.log(data);
        data.results.forEach(movie => {
            const movieObj = new Movie(movie.id,movie.original_title,movie.poster_path);
        this.movieList.searchMovie.push(movieObj);
        });
        return this.movieList.searchMovie
    }

}

export default MOVIESERVICE;