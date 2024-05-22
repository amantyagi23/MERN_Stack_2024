import MOVIESERVICE from "../services/movieService.js";

window.addEventListener("DOMContentLoaded",events);

function events(){
    getMovies();
}

async function getMovies(){
   const movies =  await MOVIESERVICE.getMovieList();
   showMovies(movies)
}

function showMovies(movies){
    const movieList = document.getElementById("movieList")
    movies.forEach(movie => {
        const card = document.createElement("div")

        const image = document.createElement("img");

        image.src = `https://image.tmdb.org/t/p/w500${movie.imagePath}`

        card.setAttribute("movieId",movie.id)
        card.addEventListener("click",showDetails)
        card.appendChild(image);

        movieList.appendChild(card);
    });
}

function showDetails(){
    const movieId = this.getAttribute("movieId");

    window.location.href = `http://127.0.0.1:5500/netflix-clone/detail.html?movieId=${movieId}`
}