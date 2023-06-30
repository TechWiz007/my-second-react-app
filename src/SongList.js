import Song1 from './Song1.mp3';

function SongList({song, setCurrentSong, setIsPlaying}) {
  function handleSongClick(song) {
      setCurrentSong(song);
      setIsPlaying(false);
  }
  return (
      <>
        <ul>
          {song.map((song)=>(
            <li key={song.id} onClick={()=>handleSongClick(song)}>
              {song.title} - {song.artist}
            </li>
          ))}
        </ul>
      </>
  );
}

export default SongList;