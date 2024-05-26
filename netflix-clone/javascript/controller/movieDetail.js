import MOVIESERVICE from "../services/movieService.js";

window.addEventListener("DOMContentLoaded",events);

function events(){
    getMovieId();
}

function getMovieId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const movieId = urlParams.get("movieId");
    movieDetail(movieId)
}

 async function movieDetail(movieId){
   
    const movie = await MOVIESERVICE.getMovieDetail(movieId);
    const videoData = await MOVIESERVICE.getMovieTrailer(movieId);


    console.log(movie);
    showMovie(movie,videoData);
}

function showMovie(movie,videoData){
    console.log(videoData);
    const main = document.getElementById("main");

    const backImage = document.createElement("img");

    backImage.src = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

    // backImage.classList.add("backDropImage")
    const title = document.createElement("h1")
    title.textContent = movie.original_title

    const div = document.createElement("div")
    div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoData.key}" title="${videoData.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    
    main.appendChild(backImage)
    main.appendChild(title);
    main.appendChild(div)
}
