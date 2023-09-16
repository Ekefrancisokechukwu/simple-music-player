/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAppContext } from "../context/context";
import Controls from "./Controls";
import Range from "./Range";
import { musicData } from "../musicData";

const MusicCards = () => {
  const { isPlaying, audioRef } = useAppContext();
  const [currentSong, setCurrentSong] = useState(1);
  const [songs, setSongs] = useState(musicData);

  const { album, artist, audio, title } = songs[currentSong];

  const next = () => {
    let nextSong = currentSong + 1;
    setCurrentSong(nextSong);
    if (nextSong > songs.length - 1) {
      setCurrentSong(0);
    }
  };

  const prev = () => {
    let prevSong = currentSong - 1;
    setCurrentSong(prevSong);
    if (prevSong < 0) {
      setCurrentSong(songs.length - 1);
    }
  };

  return (
    <>
      {" "}
      <section className="card">
        <header className="card-header">
          <h5 className="music">Music</h5>
          <button className="menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 menu-dot"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </button>
        </header>
        <div className="player">
          <div className="card-disk">
            <div
              className="disk"
              style={{ animationPlayState: isPlaying ? "running" : "paused" }}
            >
              <img src={album} alt="" />
            </div>
            <audio ref={audioRef} src={audio} preload="metaDate"></audio>
          </div>

          <div className="info-box">
            <button className="info-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 info-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </button>

            <div className="info">
              <h1>{title}</h1>
              <h5>{artist}</h5>
            </div>

            <button className="info-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 info-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>

          <Range />
          <Controls next={next} prev={prev} />
        </div>
      </section>
    </>
  );
};
export default MusicCards;
