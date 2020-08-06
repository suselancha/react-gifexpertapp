

//async: Tengo una promesa
//await: espera que se resuelva la promesa para recien seguir
//Try-catch:  manejo de error
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Pyp3BKaqBxcBfWaYrC43wSQLeVeZ1GHy`;
    const resp = await fetch(url);
    const { data } = await resp.json(); //Desestructuracion

    //console.log(data);

    //Hago un barrido en el array img
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //?: si viene la imagen se utiliza
        }
    })

    //Devuelve una promesa
    return gifs;
}