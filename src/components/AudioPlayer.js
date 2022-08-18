import { useRef } from 'react';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { BsPlayFill, BsSliders } from "react-icons/bs";
import { MdPause } from "react-icons/md";
import "./style.css"

const AudioPlayer = ({ buttonUp, song, currentSong, audioEl, isPlaying,  image, setIsPlaying, skipSong }) => {


    console.log(currentSong.progress);
    
    const clickRef = useRef();

    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset= e.nativeEvent.offsetX;

        const divProgress = offset / width * 100;
        audioEl.current.currentTime = divProgress/100 * currentSong.length;
    }

    return (
        <div className='audio_player'>
            <div onClick={buttonUp} className='slide_up_btn'></div>
            <div className="">
                <div className='audio_position'>
                    <div className="audio_covering">
                        <img src={song.img} />
                    </div>
                    <div className="audio_info_big mlr-10">
                        <p>{song.title}</p>
                        <p>{song.artist}</p>
                    </div>
                    <div className="player_progress">
                        <div className='navigation_wrapper' onClick={checkWidth}  ref={clickRef}>
                            <div className='seek_bar'  style={{width: `${currentSong.progress+"%"}`}}></div>
                        </div>
                    </div>
                    <div className='audio_control_big'>
                        <div>
                            <button className="button_controls" onClick={() => skipSong(false)}>
                                <GrFormPrevious className='controls' />
                            </button>
                        </div>
                        <div className="play_pause">
                            <button className="button_controls" onClick={() => setIsPlaying(!isPlaying)}>
                                <img src={image} className="img_play_pause" />
                            </button>
                        </div>
                        <div>
                            <button className="button_controls" onClick={() => skipSong()}>
                                <GrFormNext className='controls' />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AudioPlayer;