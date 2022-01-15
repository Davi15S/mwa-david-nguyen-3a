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
    for (var i = 1; i <= fetchedDataEpisodes.data.episodes_last_page; i++) {
        series.push(<Season txt={i} />)
    }

    if (fetchedDataEpisodes !== undefined && fetchedData !== undefined) {
        return (
            <div className='h-full bg-[#0b1c26] flex justify-center flex-col'>
                <div className='bg-[#0d1b24] w-[90%] 2xl:w-[85%] self-center z-10 shadow-2xl rounded-2xl'>
                    <div className='grid grid-cols-1 p-10 gap-x-10 tablet:grid-cols-3 xl:justify-items-center xl:px-20'>
                        <div className="col-span-1 grid my-10 tablet:col-span-1">
                            <img className='rounded-md shadow-xl w-[250px] self-center justify-self-center tablet:justify-self-start' src={fetchedData.data.image_url} alt="" />
                            <div className='font-bold pt-10 w-full tablet:pt-0 lg:mt-10'>
                                <Description text={"Type:"} txt={fetchedData.data.type} />
                                <Description text={"Episodes:"} txt={fetchedData.data.episodes} />
                                <Description text={"Status:"} txt={fetchedData.data.status} />
                                <Description text={"Source:"} txt={fetchedData.data.source} />
                                <Description text={"Popularity:"} txt={"#" + fetchedData.data.popularity} />
                            </div>
                        </div>
                        <div className='col-span-1 my-10 w-full tablet:col-span-2 tablet:pl-5'>
                            <div className="text-white font-bold text-2xl py-4 lg:text-[2.5rem]">{fetchedData.data.title_english}</div>
                            <div className=' gap-y-1 gap-x-5 tablet:grid-cols-4 flex flex-col sm:flex-row sm:items-center'>
                                <div className='flex items-center gap-x-2'>
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
                            <div className='w-full mt-10'>
                                <div className='col-span-1 w-[90px] font-bold text-xl text-white relative synopsis mb-8'>
                                    Synopsis
                                </div>
                                <div className='text-md text-white'>
                                    {fetchedData.data.synopsis}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#0d1a24] w-[90%] self-center z-0 mt-[-20px] h-full flex justify-center 2xl:w-[75%]'>
                    <div className='w-4/5'>
                        <div className='mt-16 text-xl font-bold text-gray-200 flex overflow-scroll scrollbar-hide'>
                            {series}
                        </div>
                        <div className='my-10'>
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
        <div className='px-4 text-[1.5rem] whitespace-nowrap cursor-pointer'>Season {txt}</div>
    )
}

function Episodes(props) {
    return (
        <div>
            {props.data.episodes.map((i) => {
                return (
                    <EpisodesDes text={i.title} episode={i.episode_id} url={i.video_url} />
                )
            }
            )}
        </div>
    )
}

function EpisodesDes({ className, text, txt, episode, url }) {
    return (
        <div className={`text-white h-12 flex items-center border-b border-gray-400 font-semibold ${className} whitespace-nowrap overflow-scroll scrollbar-hide`}>
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