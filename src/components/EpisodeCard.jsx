/* eslint-disable react/prop-types */
const EpisodeCard = (props) => {

    const { name,airDate,characters } = props;

    return (
        <div>
            <h1>{name}</h1>
            <h2>Fecha al aire: {airDate}</h2>
            <h3>Personajes:</h3>
            <ul>
            {
                characters.map((character) => {
                    return (
                        <li key={character.id}>{character.name} - {character.species}</li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default EpisodeCard;