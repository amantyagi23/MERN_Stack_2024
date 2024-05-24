import MOVIESERVICE from "../services/movieService.js";

window.addEventListener("DOMContentLoaded",event)

function event(){
    getQueryParams()
}

function getQueryParams(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const search = urlParams.get("q");
    const type = urlParams.get("type");
    const genre = urlParams.get("genre");

    console.log(search,type,genre);
   if(search!==null){
    getMovieList(search);
   }
   if(type!==null){
    getMovieByType(type)
   }
   if(genre!==null){
    getMovieList(genre)
   }
}

async function getMovieByType(type){
    const movieList = await MOVIESERVICE.getMovieList(type);
    showMovies(movieList)
}

async function getMovieList(search){
    const movieList = await MOVIESERVICE.getMovieBySearch(search);
    showMovies(movieList)
}



function showMovies(movies){
    const movieList = document.getElementById("movieList")

    movies.length > 0 ?
    movies.forEach(movie => {
        const card = document.createElement("div")
        card.classList.add("card")
        const image = document.createElement("img");


        image.src = `https://image.tmdb.org/t/p/w500${movie.imagePath}`

        card.setAttribute("movieId",movie.id)
        card.addEventListener("click",showDetails)
        card.appendChild(image);

        movieList.appendChild(card);
    }): movieList.innerHTML = `<h1> No Movie Found </h1>`
}

function showDetails(){
    const movieId = this.getAttribute("movieId");

    window.location.href = `http://127.0.0.1:5500/netflix-clone/detail.html?movieId=${movieId}`
}