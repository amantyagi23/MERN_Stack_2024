import Movie from "../model/movie.js";


const MOVIESERVICE = {
    movieList:[],
    getMovieList:async function (){
        const response = await fetch(  `https://api.themoviedb.org/3/movie/now_playing?api_key=664e565dee7eaa6ef924c41133a22b63&language=en-US&page=1`);
        const data = await response.json();
        console.log(data);
        data.results.forEach(movie => {
            const movieObj = new Movie(movie.id,movie.original_title,movie.poster_path);
        this.movieList.push(movieObj);
        });
        console.log(this.movieList);
        return this.movieList
    },

}

export default MOVIESERVICE;