const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    const resultList = [];
    
    for (let mutant of mutants){
        if (mutant.power === power){
            resultList.push(mutant);
        }
    }
    if (resultList.length <= 0){
        console.log("No hay ningun mutante con ese poder");
    }
    else if (resultList.length == 1){
        console.log("El mutantes con el poder " + power + " es: ");
        console.log(resultList);
    }
    else{
        console.log("Los mutantes con el poder " + power + " son:");
        console.log(resultList);
    }
  }


  findMutantByPower(mutants, "superhuman strength");
  