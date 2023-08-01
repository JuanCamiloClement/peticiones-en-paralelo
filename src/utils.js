const getAllEpisodes = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/episode')
    const data = await response.json();
    return data.results;
}

const getSingleCharacter = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const main = async() => {
    const allEpisodes = await getAllEpisodes();
    const characters = new Set();
    allEpisodes.forEach((episode) => {
        episode.characters.slice(0,10).forEach((characterEndpoint) => {
            characters.add(getSingleCharacter(characterEndpoint));
    })});
    const arrayOfAllCharacters = await Promise.all(characters);

    const data = allEpisodes.map((episode) => {
        return {
            id: episode.id,
            title: `${episode.name} - ${episode.episode}`,
            air_date: `${episode.air_date}`,
            characters: episode.characters.slice(0,10).map((url) => {
                return arrayOfAllCharacters.find((character) => character.url === url);
            })
        }
    });
    return data;
}

export const data = main();