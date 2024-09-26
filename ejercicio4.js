const cartoons = [
    { name: 'Mickey Mouse', debut: 1928 },
    { name: 'Bugs Bunny', debut: 1938 },
    { name: 'SpongeBob SquarePants', debut: 1999 },
    { name: 'Tom and Jerry', debut: 1940 },
    { name: 'Scooby-Doo', debut: 1969 },
    { name: 'The Flintstones', debut: 1960 },
    { name: 'Batman: The Animated Series', debut: 1992 },
    { name: 'The Simpsons', debut: 1989 },
    { name: 'Pokémon', debut: 1997 },
    { name: "Dexter's Laboratory", debut: 1996 }
  ];

  let oldest = {};
  let debutInit = 0;
for (const cartoon of cartoons) {
    
    if (debutInit == 0){
        debutInit = cartoon.debut;
        oldest = cartoon;
    }
    if (cartoon.debut < debutInit){
        debutInit = cartoon.debut;
        oldest = cartoon;
    }
}

console.log(oldest);
  