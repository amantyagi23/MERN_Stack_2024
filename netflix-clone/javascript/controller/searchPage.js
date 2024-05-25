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
    let page = urlParams.get("page");

    console.log(search,type,genre);
    page = page!==null?page:1
   if(search!==null){
    getMovieList(search,page);
   }
   if(type!==null){
    getMovieByType(type,page)
   }
   if(genre!==null){
    getMovieByGenre(genre,page)
   }
}

async function getMovieByType(type,page){
    const movieList = await MOVIESERVICE.getMovieList(type,page);
    showMovies(movieList.movies,movieList.totalPage,movieList.page)
}

async function getMovieList(search,page){
    const movieList = await MOVIESERVICE.getMovieBySearch(search,page);
    showMovies(movieList.movies,movieList.totalPage,movieList.page)
}


async function getMovieByGenre(genre,page){
    const movieList = await MOVIESERVICE.getMovieByGenre(genre,page);
    showMovies(movieList.movies,movieList.totalPage,movieList.page)
}



function showMovies(movies,totalPages,page){
    const movieList = document.getElementById("movieList")

    const pagination = document.getElementById("pagination")
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

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const search = urlParams.get("q");
    const type = urlParams.get("type");
    const genre = urlParams.get("genre");
    // let page = urlParams.get("page");
   
    let newUrl = ''
    if(search!==null){
        newUrl +=`q=${search}`
    }
    if(genre!==null){
        newUrl +=`genre=${genre}`
    }
    if(type!==null){
        newUrl+=`type=${type}`
    }
    
    for (let i = 1; i < 10; i++) {
        const a = document.createElement("a"); 
        a.href = `/netflix-clone/search.html?${newUrl}&page=${i}`
        a.innerText = i
        if(page==i){
            a.classList.add("highlight")
        }
        pagination.appendChild(a)
    }
}

function showDetails(){
    const movieId = this.getAttribute("movieId");

    window.location.href = `http://127.0.0.1:5500/netflix-clone/detail.html?movieId=${movieId}`
}