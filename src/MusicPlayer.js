import PauseButton from "./PauseButton";
import SongList from "./SongList";
import PlayButton from "./PlayButton";
import React, {useState, useRef} from "react";

function MusicPlayer() {
    const [song, setSong] = useState ([
      {id: 1, title: "Song1", artist: "Artist1", url: "src/Song1.mp3"},
      {id: 2, title: "Song2", artist: "Artist2", url: "src/Song2.mp3"},
      {id: 3, title: "Song3", artist: "Artist3", url: "src/Song3.mp3"},
    ]);
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElement = useRef(null);

    function handlePlay() {
      setIsPlaying(true);
      audioElement.current.play();
    }

    function handlePause() {
      audioElement.current.pause();
    }
    return (
      <>
        <h1>MusicPlayer</h1>
        <SongList song={song} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} />
        {currentSong && (
          <div>
            <audio src={currentSong.url} ref={audioElement}></audio>
            <h2>{currentSong.title}</h2>
            <h3>{currentSong.artist}</h3>
            {isPlaying ? (
              <PauseButton handlePause = {handlePause} />
            ) : (
              <PlayButton handlePlay = {handlePlay} />
            )} 
          </div>
        )}
      </>
    );
}

export default MusicPlayer;