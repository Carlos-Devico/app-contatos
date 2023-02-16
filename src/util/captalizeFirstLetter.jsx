/*função que torna a primeira letra das palavras maiuscula*/ 
const capitalizeFirstLetter = string => {
    return  string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter;