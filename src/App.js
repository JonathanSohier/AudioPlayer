import { useEffect, useState } from 'react';
import Header from './components/Header';
import Midle from './components/Midle';
import FixFooter from './components/FixFooter';

import './App.css';



function App() {

  const [songs, setSongs] = useState([
    {
      title: "Ah",
      artist: "Bellaire",
      img: "./Img_music/Ah.jpg",
      src: "./Music/Bellaire_Ah.mp3"
    },
    {
      title: "Natural",
      artist: "Princess Jorge",
      img: "./Img_music/Natural.jpg",
      src: "./Music/PrincessJorge_Natural.mp3"
    },
    {
      title: "No Eyes",
      artist: "Claptone",
      img: "./Img_music/NoEyes.jpg",
      src: "./Music/Claptone_NoEyes.mp3"
    },
    {
      title: "Tadow",
      artist: "FkjMasego",
      img: "./Img_music/Tadow.jpg",
      src: "./Music/FkjMasego_Tadow.mp3"
    }
  ]);

  const [songIndex, setSongIndex] = useState(0);

  return (
    <div className="App m-20">
      <Header />
      <h2 className='mtb-20'>Musico</h2>
      <Midle songIndex={songIndex} setSongIndex={setSongIndex} songs={songs}/>
      <FixFooter songIndex={songIndex} setSongIndex={setSongIndex} songs={songs}/>
    </div>
  );
}

export default App;
