const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++){
    for(let k = 0; k < listOfNeighbours[i].length; k++){
        console.log(`Neighbour ${listOfNeighbours[i][k]}`);
    }
}