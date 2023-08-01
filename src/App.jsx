import './App.css'
import { useState,useEffect } from 'react';
import EpisodeCard from './components/EpisodeCard';
import { data } from './utils';

const App = () => {

  const [episodes,setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await data;
      setEpisodes(response);
    }
    fetchData();
  },[]);

  return (
    <>
      <div>
        {
          episodes.map((episode) => {
            return (
            <EpisodeCard 
              key={episode.id}
              name = {episode.title}
              airDate = {episode.air_date}
              characters = {episode.characters}
            />
            )
          })
        }
      </div>
    </>
  )
}

export default App;