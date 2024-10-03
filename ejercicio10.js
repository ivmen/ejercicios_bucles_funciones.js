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

function getCapital(country) {
    let noExiste = false;
    for (const key in capitals){
        if (key === country){
            console.log("La capital de " + country + " es " + capitals[key])
            noExiste = true;
        }
    }
    if (!noExiste){
        console.log(country + " no esta en nuestra base de datos");
    }
}

getCapital("Spain");

  