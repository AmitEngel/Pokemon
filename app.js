const $row = document.querySelector('.row');
const $progressBar = document.querySelector('.progress');
const $breadcrumb = document.querySelector('.breadcrumb');
const $h1 = document.querySelector('h1');
var shape;
function viewShapes() {
    $row.innerHTML = '';
    fetch('https://pokeapi.co/api/v2/pokemon-shape').then(res => res.json()).then(shapes => {
        console.log(shapes.results);
        shapes.results.forEach(s => $row.innerHTML += `
        <div class="col-2 mb-3">
            <div class="card text-center" style="width: 12rem;">
                <div class="card-body">
                    <h5 class="card-title">${s.name}</h5>
                        <a href="#" class="btn btn-primary" data-url="${s.url}">Select</a>
                </div>
            </div>
        </div>`);
        $progressBar.innerHTML = `
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 0%">0%</div>
        `;
        $breadcrumb.innerHTML = `
            <li class="breadcrumb-item active" aria-current="page">Shapes</li>
        `;
        $h1.innerHTML = `Choose Your Shape`;
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', viewSpieces)
        });
    });
}
function viewSpieces(e) {
    var shapeURL = e.target.dataset.url;
    console.log(shapeURL);
    $row.innerHTML = '';
    fetch(shapeURL).then(res => res.json()).then(shape => {
        shape.pokemon_species.forEach(s => {
            $row.innerHTML += `
        <div class="col-2 mb-3">
            <div class="card text-center" style="width: 12rem;">
                <div class="card-body">
                    <h5 class="card-title">${s.name}</h5>
                        <a href="#" class="btn btn-primary" data-url="${s.url}">Select</a>
                </div>
            </div>
        </div>`;       
        });
        $progressBar.innerHTML = `
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 33%">33%</div>
        `;
        $breadcrumb.innerHTML = `
            <li class="breadcrumb-item"><a href="#">Shape</a></li>
            <li class="breadcrumb-item active" aria-current="page">Spieces</li>
        `;
        $h1.innerHTML = `Choose Your Speices`;
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', viewVarieties)
        });
    });
}

function viewVarieties(e) {
    var speciesURL = e.target.dataset.url;
    console.log(speciesURL);
    $row.innerHTML = '';
    fetch(speciesURL).then(res => res.json()).then(speices => {
        speices.varieties.forEach((v) => $row.innerHTML += `
        <div class="col-2 mb-3">
            <div class="card text-center" style="width: 12rem;">
                <div class="card-body">
                    <h5 class="card-title">${v.pokemon.name}</h5>
                        <a href="#" class="btn btn-primary" data-url="${v.pokemon.url}">Select</a>
                </div>
            </div>
        </div>`);
        $progressBar.innerHTML = `
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 66%">66%</div>
        `;
        $breadcrumb.innerHTML = `
            <li class="breadcrumb-item"><a href="#">Shape</a></li>
            <li class="breadcrumb-item"><a href="#">Spieces</a></li>
            <li class="breadcrumb-item active" aria-current="page">Pokemon</li>
        `;
        $h1.innerHTML = `Choose Your Pokemon`;
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', viewPOkemon)
        });
    });
}

function viewPOkemon(e) {
    var pokemonURL = e.target.dataset.url;
    console.log(pokemonURL);
    $row.innerHTML = '';
    fetch(pokemonURL).then(res => res.json()).then(pokemon => {
        $row.innerHTML += `
        <style>
        .card{
            margin: 0 auto;
        }
        </style>    
        <div class="card" style="width: 17rem; text-align: center; background-color: rgba(0, 0, 0, 0.712); color: white;">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${pokemon.name}</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Back to first screen</a>
            </div>
            </div>`
        document.querySelector('.btn').addEventListener('click', viewShapes);
    });
    $progressBar.innerHTML = `
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 100%">100%</div>
        `;
    $breadcrumb.innerHTML = `
            <li class="breadcrumb-item"><a href="#">Shape</a></li>
            <li class="breadcrumb-item"><a href="#">Spiece</a></li>
            <li class="breadcrumb-item active" aria-current="page">Pokemon</li>
        `;
    $h1.innerHTML = `Your Pokemon Is:`;
}
viewShapes();