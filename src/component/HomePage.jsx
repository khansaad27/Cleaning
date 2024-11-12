import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const HomePage = () => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); 
  const [isIconClicked, setIsIconClicked] = useState(false); 

  useEffect(() => {
   
    const onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player("youtube-player", {
        videoId: "Ad7mZ16ACB0", 
        events: {
          onReady: () => console.log("YouTube Player is ready"),
        },
      });
      setPlayer(newPlayer);
    };

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;


    return () => {
      if (script) {
        script.remove();
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
        setIsPlaying(false);
      } else {
        player.playVideo();
        setIsPlaying(true);
      }
      setIsIconClicked(!isIconClicked); 
    }
  };

  return (
    <div style={{ position: "relative", height: "700px", overflow: "hidden" }}>

      <div
        id="youtube-player"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, 
        }}
      />

 
      <div
        onClick={togglePlayPause}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          zIndex: 1,
          color: "#fff",
          fontSize: "50px",
          transition: "all 0.3s",
        }}
      >
        {isIconClicked ? (
          <FaPause /> 
        ) : (
          <FaPlay /> 
        )}
      </div>


     
    </div>
  );
};

export default HomePage;
