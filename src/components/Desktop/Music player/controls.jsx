import React, { useContext } from 'react';
import PauseButton from '../../logos_and_icons/pauseButton';
import PreviousSongLogo from '../../logos_and_icons/previousSongLogo';
import Play_button_small from '../../logos_and_icons/playButton_small';
import NextSongLogo from '../../logos_and_icons/nextSongLogo';
import SuffleLogo from '../../logos_and_icons/shuffleLogo';
import RepeatLogo from '../../logos_and_icons/repeatLogo';
import { useState } from 'react';
import { AudioContext } from '../../../Contexts/audioContext';

const Controls = ({ isPlaying, setIsPlaying, setRepeat, setShuffle, handlePrevSong, handleNextSong, song }) => {

    const {handleActiveSong}= useContext(AudioContext);

    const [isRepeated, setIsRepeated]= useState(false);
    const [isShuffled, setIsShuffled]= useState(false);
    return (
        <div className="flex flex-nowrap items-center">
            <div className="cursor-pointer" onClick={handlePrevSong}>
                <PreviousSongLogo color={"#000000"} margin={"1rem"} />
            </div>

            {/* try  onClick={setIsPlaying(isPlaying ? false : true) --> it is rendering infinitely why */}
            <div className="cursor-pointer" onClick={() => {setIsPlaying(isPlaying ? false : true);
                handleActiveSong(song)}}>
                {
                    !isPlaying ? 
                        <Play_button_small color={"#000000"} width={"30px"} height={"30px"} /> 
                    :
                        <PauseButton color={"#000000"} width={"30px"} height={"30px"} />
                }
            </div>

            <div className="cursor-pointer" onClick={handleNextSong}>
                <NextSongLogo color={"#000000"} margin={"1rem"} />
            </div>

            <div className="cursor-pointer" onClick={() => {setShuffle((prev) => !prev); setIsShuffled((old) => !old)}}>
                <SuffleLogo color={isShuffled ? "#f50" : "#000000"} margin={"0.5rem"} />
            </div>

            <div className="cursor-pointer ml-[10px]" onClick={() => {setRepeat((prev) => !prev); setIsRepeated((old) => !old)}}>
                <RepeatLogo color={isRepeated ? "#f50" : "#000000"} margin={"0.5rem"} width={"25px"} height={"25px"} />
            </div>

        </div>
    )
};

export default Controls;
