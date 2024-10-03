const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };


  function countryCreator (country, capital){
    this.country = country;
    this.capital = capital;  
 }

function objectCreate (list){
    let capitalsKeys = Object.entries(list);
    let newCapitals = []
    for (let i = 0; i < capitalsKeys.length; i++){
        newCapitals.push(new countryCreator(capitalsKeys[i][0], capitalsKeys[i][1]));
    }
    return newCapitals;
}

function comparator(ciudad, list){
    let respuesta = false;
    let capitales = objectCreate(list);
    let city = "";
    let capital = "";
    for (const busqueda of capitales) {
        if (busqueda.country == ciudad){
            city = busqueda.country;
            capital = busqueda.capital;
            respuesta = true;
        }
    }
    if (respuesta == true){
        console.log("La capital de " + city + " es " + capital)
    }else{
        console.log(city + " no esta en nuestra base de datos");
    }
}

function getCapital(country) {
    comparator(country, capitals);
}
  
getCapital("Portugal");

  