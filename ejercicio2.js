const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
let beforeYear = 0;
let afterYear = 0;

for (const movie of movies) {
    if (movie.releaseYear < 2000){
        beforeYear+=1;
    }else{
        afterYear+=1;
    }
}

console.log("Pelculas antes del año 2000: " + beforeYear)
console.log("Pelculas despues del año 2000: " + afterYear)
