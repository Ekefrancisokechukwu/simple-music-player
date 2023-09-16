/* eslint-disable react/prop-types */
import { IoShuffleOutline } from "react-icons/io5";
import { BsRepeat } from "react-icons/bs";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";
import { HiPause } from "react-icons/hi";
import { AiFillPlayCircle } from "react-icons/ai";
import { useAppContext } from "../context/context";

const Controls = ({ next, prev }) => {
  const { handlePlay, isPlaying } = useAppContext();

  return (
    <div className="controls">
      <button className="control-btn">
        <IoShuffleOutline />
      </button>
      <div className="control-main">
        <button className="control-btn" onClick={() => prev()}>
          <BiSkipPrevious />
        </button>
        <button onClick={handlePlay} className="main-btn">
          {isPlaying ? <HiPause /> : <AiFillPlayCircle />}
        </button>
        <button className="control-btn" onClick={() => next()}>
          <BiSkipNext />
        </button>
      </div>
      <button className="control-btn">
        <BsRepeat />
      </button>
    </div>
  );
};
export default Controls;
