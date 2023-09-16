import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/context";

const Range = () => {
  const { duration, setDuration, isPlaying, audioRef } = useAppContext();
  const [currentTime, setCurrentTime] = useState(0);
  const progressBar = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const seconds = Math.floor(audioRef?.current?.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [
    audioRef,
    audioRef?.current?.loadedmetadata,
    audioRef?.current?.readyState,
    setDuration,
  ]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }, [audioRef, isPlaying]);

  const whilePlaying = () => {
    progressBar.current.value = audioRef.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMunutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${returnMunutes} : ${returnSeconds}`;
  };

  const changeRange = () => {
    audioRef.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  return (
    <>
      <input
        type="range"
        className="input"
        defaultValue={0}
        ref={progressBar}
        onChange={changeRange}
      />
      <div className="duration">
        <span>{calculateTime(currentTime)}</span>
        <span> {duration && !isNaN(duration) && calculateTime(duration)}</span>
      </div>
    </>
  );
};
export default Range;
