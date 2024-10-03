const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
 function tracksByGenre (genre, musicList){
    this.genre = genre;
    this.musicList = musicList;  
 }

 let metal = [];
 let rock = [];
 let grunge = [];
 let country = [];
 let pop = [];

 function listaGeneros (objeto){
    if (objeto.genre === "Metal"){
      metal.push(objeto.title);
    }
    if (objeto.genre === "Rock"){
      rock.push(objeto.title);
    }
    if (objeto.genre === "Grunge"){
      grunge.push(objeto.title);
    }
    if (objeto.genre === "Country"){
      country.push(objeto.title);
    }
    if (objeto.genre === "Pop"){
      pop.push(objeto.title);
    }
 }

 for (const track of tracks){
    listaGeneros(track);
 }
  
 let metalList = new tracksByGenre ("Metal", metal);
 let rockList = new tracksByGenre ("Rock", rock);
 let grungeList = new tracksByGenre ("Grunge", grunge);
 let countryList = new tracksByGenre ("Country", country);
 let popList = new tracksByGenre ("Pop", pop);

 console.log (metalList, rockList, grungeList, countryList, popList)



