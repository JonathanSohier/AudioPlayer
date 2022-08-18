import './style.css';

const Midle = props => {

    const changSong = (index) => {
        props.setSongIndex(index)
    }

    return(
        <div className='tab-container'>
            {/* Tab Header */}
            <div className='tab-header flex'>
                <a className='active' href='#musics'>
                    Musics
                </a>
                <a href='#aboutUs'>
                    About Us
                </a>
            </div>
            {/* Tab Content */}
            <div className='tab-contents'>
                <div className='tab-content' id='musics'>
                    <div className='affichage_music'>
                        <ul>
                            <li>
                                <div onClick={() => changSong(0)} className='left audio_ls_item flex'>
                                    <div className="audio_img">
                                        <img src={props.songs[0].img} />
                                    </div>
                                    <div className="audio_info mlr-10">
                                        <p>{props.songs[0].title}</p>
                                        <p>{props.songs[0].artist}</p>
                                    </div> 
                                </div>
                            </li>
                            <li>
                                <div onClick={() => changSong(1)} className='left audio_ls_item flex'>
                                    <div className="audio_img">
                                        <img src={props.songs[1].img} />
                                    </div>
                                    <div className="audio_info mlr-10">
                                        <p>{props.songs[1].title}</p>
                                        <p>{props.songs[1].artist}</p>
                                    </div> 
                                </div>
                            </li>
                            <li>
                                <div onClick={() => changSong(2)} className='left audio_ls_item flex'>
                                    <div className="audio_img">
                                        <img src={props.songs[2].img} />
                                    </div>
                                    <div className="audio_info mlr-10">
                                        <p>{props.songs[2].title}</p>
                                        <p>{props.songs[2].artist}</p>
                                    </div> 
                                </div>
                            </li>
                            <li>
                                <div onClick={() => changSong(3)} className='left audio_ls_item flex'>
                                    <div className="audio_img">
                                        <img src={props.songs[3].img} />
                                    </div>
                                    <div className="audio_info mlr-10">
                                        <p>{props.songs[3].title}</p>
                                        <p>{props.songs[3].artist}</p>
                                    </div> 
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='tab-content' id='aboutUs'>
                    <div className='affichage_music'>
                        <p>Musico is an application allowing its user to listen to music from their smartphone.</p>
                        <p>Size recomanded : iPhone SE</p><br/>
                        <p>Create by Jonthan SOHIER</p>
                        <p>For Fasst</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Midle;