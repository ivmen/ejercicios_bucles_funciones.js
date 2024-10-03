const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1970 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];

function Filmsbydecade(decade , filmList){
    this.decade = decade;
    this.filmList = filmList;
}

let dec70 = [];
let dec80 = [];
let dec90 = [];
let dec2000 = [];
let dec2010 = [];

function listaDecadas(objeto){
    if(objeto.releaseYear >= 1970 && objeto.releaseYear < 1980){
        dec70.push(objeto.title);
    }
    if(objeto.releaseYear >= 1980 && objeto.releaseYear < 1990){
        dec80.push(objeto.title);
    }
    if(objeto.releaseYear >= 1990 && objeto.releaseYear < 2000){
        dec90.push(objeto.title);
    }
    if(objeto.releaseYear >= 2000 && objeto.releaseYear < 2010){
        dec2000.push(objeto.title);
    }
    if(objeto.releaseYear >= 2010){
        dec2010.push(objeto.title);
    }
}
  
for (const movie of starWarsMovies) {
    listaDecadas(movie);
}

let decaSetenta = new Filmsbydecade(70, dec70);
let decaOchenta = new Filmsbydecade(80, dec80);
let decaNoventa = new Filmsbydecade(90, dec90);
let decaDosMil = new Filmsbydecade(2000, dec2000);
let decaDosMilDiez = new Filmsbydecade(2010, dec2010);

console.log(decaSetenta, decaOchenta, decaNoventa, decaDosMil, decaDosMilDiez);


