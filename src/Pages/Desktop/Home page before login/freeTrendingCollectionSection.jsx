import {useState, useEffect, useContext} from 'react';
import { Link } from "react-router-dom";
import Empty_heart from '../../../components/logos_and_icons/emptyHeart'
import Filled_follow from '../../../components/logos_and_icons/filledFollow';
import { useFetchSongs } from '../../../custom hooks/useFetchSongs';
import {useFetchAlbums} from '../../../custom hooks/useFetchAlbums';
import SimpleLoading from '../../../components/loaders/simpleLoading';
import { MusicContext } from '../../../Contexts/musicContext';

function TrendingSongs() {

    const {urlObject, projectId}= useContext(MusicContext);

    const [top50, loader, error]= useFetchSongs(urlObject.musicUrl + "?limit=12");

    return (
        <div className='pb-[4rem]'>
            <div className="flex justify-center">
                <p className="text-[25px] font-normal">Hear what’s 
                    trending for free in the SoundCloud community
                </p>
            </div>

            {loader && <SimpleLoading /> }
            <div className='p-[1rem]'>
                <div className='grid grid-row-2 grid-cols-6 justify-items-center'>
                    {
                        top50.map((album) => {
                            let {artist, audio, image, title, release, songId}= album;

                            if(release) {
                                release= release.slice(6);
                            }
                            
                            if(title.length > 15) {
                                title= title.slice(0,15) + '...';
                            }
                            
                            return(
                                <div key={title} className='m-[1rem]'>
                                    <Link to={`/${songId}`} className='relative w-[8rem] h-[8rem] min-[1024px]:w-[10rem] min-[1024px]:h-[8rem]'>

                                        <img src={image} alt={title}  
                                            className={` cursor-pointer bg-cover
                                                ${loader && 'bg-gradient-to-r from-[#846170] to-[#70929c]'} 
                                                `}>
                                        </img>

                                        <div className={`absolute w-full h-full flex flex-col items-center justify-end 
                                            top-0 left-0 right-[25%] bottom-0 opacity-0
                                            hover:opacity-100`}>
                                            <button className='bg-[#f50] absolute bottom-1/3 w-[50px] h-[50px] rounded-full pl-[4px] mb-[3px]
                                                flex items-center justify-center hover:bg-[#d74800]'>
                                                <svg className="fill-white h-[39px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"> 
                                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                                </svg>
                                            </button>

                                            <div className='flex items-center justify-end w-full mr-[30px] mb-[10px]'>
                                                <div className='mr-[1rem]'>
                                                    <Empty_heart color= {"white"} width={"20px"} height={"20px"} />
                                                </div>
                                                
                                                <div className='mr-[1rem]'>
                                                    <Filled_follow color= {"white"} width={"20px"} height={"20px"}/>
                                                </div>

                                                <div className=''>
                                                    <img src="https://a-v2.sndcdn.com/assets/images/more-0e9e752c.svg" 
                                                        className="w-[20px] h-[20px]"/>
                                                </div>

                                                <div>

                                                </div>
                                            </div>
                                        </div>

                                    </Link>
                                    

                                    <div className='mt-[5px]'>
                                        <span className='text-[14px]'>{title}</span>
                                        <div className='text-[12px] text-[#999] hover:text-black'>
                                        <a href='#'>{artist[0].name}</a>
                                        </div>  
                                    </div>
                                </div>
                        )})
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to={'/discover'} className="cursor-pointer text-white text-lg font-thin bg-[#f50] px-7 py-2 rounded-[4px]">
                    Explore trending playlists
                </Link>
            </div>
        
        </div>
    )
}

export default TrendingSongs;

// 