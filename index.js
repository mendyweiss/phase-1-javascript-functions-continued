// code your solution here
function saturdayFun (activty = "roller-skate") {
    return `This Saturday, I want to ${activty}!`;
}

function mondayWork (place ='go to the office') {
    return `This Monday, I will ${place}.`;
}

function wrapAdjective (highlight = '*') {
    return function /*innerFunc*/ (wordsToBeHighLighted = 'a hard worker') {
        return `You are ${highlight}${wordsToBeHighLighted}${highlight}!`;
    };
}/*("*")('a hard worker')*/;