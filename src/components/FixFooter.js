import { useState, useRef, useEffect } from 'react';
import { BsPlayFill } from "react-icons/bs";
import { GrFormNext } from 'react-icons/gr';
import AudioPlayer from './AudioPlayer.js';
import './style.css';

const FixFooter = props => {

    const [image, setImage] = useState(
        "./Icons/play.png"
    );

    const [slideUp, setSlideUp] = useState(false);

    const buttonUp = () => {
        setSlideUp(false);
    }

    const audioEl = useRef();

    const [currentSong, setCurrentSong] = useState(props.songs[0]);

    var duration = 0;
    var time = 0;

    const onPlaying = () => {
        duration = audioEl.current.duration;
        time = audioEl.current.currentTime;

        setCurrentSong({ ...currentSong,"progress": time /duration * 100, "length": duration})
    }

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
            setImage(
                "./Icons/pause.png"
            );
        } else {
            audioEl.current.pause();
            setImage(
                "./Icons/play.jpg"
            );
        }
    });


    const skipSong = (forwards = true) => {
        if (forwards) {
            props.setSongIndex(() => {
                let temp = props.songIndex;
                if (temp + 1 > props.songs.length - 1) {
                    temp = 0;
                } else {
                    temp++;
                }
                return temp;
            })
         } else {
            props.setSongIndex(() => {
                let temp = props.songIndex;
                if (temp - 1 < 0) {
                    temp = props.songs.length - 1;
                } else {
                    temp--;
                }
                return temp;
            })
         }
    }

    return (
        <div className='fix_footer'>
            {slideUp && <AudioPlayer buttonUp={buttonUp} song={props.songs[props.songIndex]} currentSong={currentSong} audioEl={audioEl} isPlaying={isPlaying} image={image} setIsPlaying={setIsPlaying} skipSong={skipSong} />}
            <div onClick={() => setSlideUp(true)} className='slide_up_btn'></div>
            <audio src={props.songs[props.songIndex].src} onTimeUpdate={onPlaying} ref={audioEl}></audio>
            <div className="back flex justify-sb">
                <div className='left audio_ls_item flex'>
                    <div className="audio_img">
                        <img src={props.songs[props.songIndex].img} />
                    </div>
                    <div className="audio_info mlr-10">
                        <p>{props.songs[props.songIndex].title}</p>
                        <p>{props.songs[props.songIndex].artist}</p>
                    </div> 
                </div>
                <div className='right flex'>
                    <div>
                        <button className="button_controls" onClick={() => setIsPlaying(!isPlaying)}>
                            <img src={image} className="img_play_pause" />
                        </button>
                        <button className="button_controls" onClick={() => skipSong()}>
                            <GrFormNext className='controls' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FixFooter;