import React, { useState, useEffect } from 'react'
import imdb from "../Images/imdb_logo.png"
import axios from "axios"
import "../HeadContent/HeadContent.scss"

function Content() {
    let endpoints = [
        'http://localhost:5000/data',
        'http://localhost:5000/data/episodes',
    ];

    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState([]);
    const [fetchedDataEpisodes, setFetchDataEpisodes] = useState([]);
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)

            axios.all(endpoints.map((endpoints) => axios.get(endpoints))).then(
                axios.spread((data, episodes) => {
                    setFetchedData(data);
                    setFetchDataEpisodes(episodes);
                    console.log({ data, episodes });
                })
            );

            setIsLoading(false)
        };
        getData();
    }, []);

    if (isLoading || fetchedData.data === undefined || fetchedDataEpisodes.data === undefined) return <Loading />

    var series = [];
    for (var i = 0; i < fetchedDataEpisodes.data.episodes_last_page; i++) {
        series.push(<Season txt={i + 1} />)
    }

    if (fetchedDataEpisodes !== undefined && fetchedData !== undefined) {
        return (
            <div className='bg-[#0b1c26] h-full flex flex-col'>
                <div className='bg-[#0d1b24] w-4/5 h-[75%] shadow-2xl rounded-b-3xl self-center z-10'>
                    <div className='flex m-32 gap-20'>
                        <div className="w-[20%] flex-col">
                            <img className='rounded-md shadow-xl h-[320px]' src={fetchedData.data.image_url} alt="" />
                            <div className='font-bold mt-10'>
                                <Description text={"Type:"} txt={fetchedData.data.type} />
                                <Description text={"Episodes:"} txt={fetchedData.data.episodes} />
                                <Description text={"Status:"} txt={fetchedData.data.status} />
                                <Description text={"Source:"} txt={fetchedData.data.source} />
                                <Description text={"Popularity:"} txt={"#" + fetchedData.data.popularity} />
                            </div></div>
                        <div className='w-[80%]'>
                            <div className="text-white font-bold text-[3rem]">{fetchedData.data.title_english}</div>
                            <div className='mt-3 flex items-center gap-7'>
                                <div className="gap-2 flex items-center">
                                    <img className='w-10' src={imdb} alt="" />
                                    <div className='text-gray-400 font-bold'>{fetchedData.data.score}</div>
                                </div>
                                <div className='font-bold text-gray-400'>
                                    {fetchedData.data.aired.prop.from.year}
                                </div>
                                <div className='font-bold text-gray-400'>
                                    {fetchedData.data.rating}
                                </div>
                            </div>
                            <div className='mt-10 text-white text-[1rem]'>
                                {fetchedData.data.synopsis}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-4/5 bg-[#0d1a24] self-center z-0 mt-[-20px] h-full flex justify-center'>
                    <div className='w-4/5'>
                        <div className='mt-16 text-xl font-bold text-gray-200 flex'>
                            {series}
                        </div>
                        <div className='my-10 ml-6'>
                            <Episodes data={fetchedDataEpisodes.data} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function Description({ text, txt }) {
    return (<div className='flex'><div className='text-gray-200'>{text} </div><div className='text-gray-400 ml-2'>{txt}</div></div>)
}

function Season({ txt }) {
    return (
        <div className='px-6'><a href="">Season {txt}</a></div>
    )
}

function Episodes(props) {
    return (
        <div>
            {props.data.episodes.map((i) => {
                if (i.filler === true) {
                    return (
                        <EpisodesDes className={"flex justify-between"} text={i.title} txt={"FILLER"} episode={i.episode_id} url={i.video_url} />
                    )
                }
                else {
                    return (
                        <EpisodesDes text={i.title} episode={i.episode_id} url={i.video_url} />
                    )
                }
            }
            )}
        </div>
    )
}

function EpisodesDes({ className, text, txt, episode, url }) {
    return (
        <div className={`text-white h-12 flex items-center border-b border-gray-400 font-semibold ${className}`}>
            <a className='flex gap-5 hover:text-gray-200 transition-all duration-200' href={url} target="_blank">
                <div className='font-bold text-gray-400'>{episode}:</div>
                <div>{text}</div>
            </a>
            <div className='font-bold text-gray-400 text-sm pr-2'>{txt}</div>
        </div>
    )
}

function Loading() {
    return (
        <div className='bg-[#0b1c26] h-screen flex justify-center'>
            <div className="lds-ring m-10"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Content;