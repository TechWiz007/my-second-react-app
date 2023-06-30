import React from "react";

function PlayButton(handlePlay) {
  return (
      <>
        <button onClick={handlePlay}>PLAY</button>
      </>
  );
}

export default PlayButton;