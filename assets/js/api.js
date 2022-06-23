

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'd54bd45f38aa4b1f75c30a3086f27e83';
const LANGUAGE = 'language=PT-BR';
const BASE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

var result = document.getElementById('result');

function myFunction() {
    let min = 555;
    let max = 70000;

    const ID_MOVIE = Math.floor(max * Math.random() + min * 2 + max * Math.random() + min);

    var linkURL = `${BASE_URL}${ID_MOVIE}?api_key=${API_KEY}&${LANGUAGE}`;

    fetch(linkURL)
        .then(response => response.json())
        .then(data => {
            console.log(data.original_title)
            console.log(data.id)
            console.log(`categoria:${data.genres[0].name}`)
            movieTitle.textContent = `${data.original_title}`;
            paragraph.textContent = `${data.overview}`;
            imageProfile.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        })
        .catch(() => {
            console.log('Que pena! Não encontramos nenhum filme.')
            movieTitle.textContent = `Poxa...`;
            paragraph.textContent = 'Que pena! Não encontramos nenhum filme.'
            imageProfile.src = `assets/images/error.png`
        })
}
