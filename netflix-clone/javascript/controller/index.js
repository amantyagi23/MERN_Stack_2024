import MOVIESERVICE from "../services/movieService.js";

window.addEventListener("DOMContentLoaded",events);

function events(){
    getMovies("popular");
    getMovies("upcoming");
    getMovies("top_rated");
    getGeneres();
    document.getElementById("search").addEventListener("input",debounce)
}

async function getGeneres(){
    const genres = await MOVIESERVICE.getGeneres()
    showGeneres(genres);
}

function showGeneres(generes){
    const select = document.getElementById("genere");

    generes.forEach((gen)=>{
        const div = document.createElement("div");
        div.innerText = gen.name

        div.addEventListener("click",function(){
            window.location.href = `/netflix-clone/search.html?genre=${gen.id}`
        })
        select.appendChild(div)
    })
}

async function getMovies(type){
   const movies =  await MOVIESERVICE.getMovieList(type,1);
   showMovies(movies.movies,type)
}

function showMovies(movies,type){
    const movieList = document.getElementById(type)
    movies.forEach(movie => {
        const card = document.createElement("div")
        card.classList.add("card")
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


async function debounce(){
    console.log(this.value);

    const data  = await MOVIESERVICE.getMovieBySearch(this.value,1);
    console.log(data);
    const searchData = document.getElementById("searchData")
    searchData.innerHTML = ""
    data.movies.forEach((movie)=>{
        const div = document.createElement("div");
        div.innerText = movie.title
        searchData.appendChild(div)
    })
}