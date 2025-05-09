/** 
 * Disponemos de una función que debe formatear un string, en función del resultado de un partido de fútbol (es para una página Web deportiva). 
 * 
 * 
 * @param {array<string>} teams Los competidores del partido, en un array de strings, siempre de dos posiciones
 * @param {array<number>} scores Las goles que han metido cada equipo, respectivamente.
 * 
 * @returns {string} Resultado del partido, siguiendo el formato indicado en los comentarios, según si ha ganado el primer equipo, el segundo, o ha habido empate.   
*/
function uefaEuro2016(teams, scores) {
    
    if (scores[0] === scores[1]){
        let drawText = `At match ${teams[0]} - ${teams[1]}, teams played draw.`
        return drawText;
    } if (scores[0] > scores[1]) {
        let win1 = `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
        return win1;
    } if (scores[0] < scores[1]) {
        let win2 = `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
        return win2;
    }
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])) // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2])) // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])) // "At match Portugal - Iceland, teams played draw."
console.log(uefaEuro2016(['Italy', 'Spain'], [2, 0])) // "At match Italy - Spain, Italy won!"
