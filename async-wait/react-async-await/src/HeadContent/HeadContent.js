import React from 'react'
import { useAsync } from 'react-async';
import imdb from "../Images/imdb_logo.png"

const loadUsers = async () =>
    await fetch("http://localhost:5000/data")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

function Content() {
    const { data, error, isLoading } = useAsync({ promiseFn: loadUsers })
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)

        return (
            <div className='bg-[#0b1c26] h-screen flex justify-center'>
                <div className='bg-[#0d1b24] w-4/5 h-[70%] shadow-2xl rounded-3xl'>
                    <div className='flex m-32 gap-20'>
                        <div className="w-[20%] flex-col">
                            <img className='rounded-md shadow-xl h-[320px]' src={data.image_url} alt="" />
                            <div className='font-bold mt-10'>
                                <Description text={"Type:"} txt={data.type}/>
                                <Description text={"Episodes:"} txt={data.episodes}/>
                                <Description text={"Status:"} txt={data.status}/>
                                <Description text={"Premiered:"} txt={data.premiered}/>
                                <Description text={"Source:"} txt={data.source}/>
                            </div></div>
                        <div className='w-[80%]'>
                            <div className="text-white font-bold text-[3rem]">{data.title_english}</div>
                            <div className='mt-3 flex items-center gap-7'>
                                <div className="gap-2 flex items-center">
                                    <img className='w-10' src={imdb} alt="" />
                                    <div className='text-gray-400 font-bold'>{data.score}</div>
                                </div>
                                <div className='font-bold text-gray-400'>
                                    {data.aired.prop.from.year}
                                </div>
                                <div className='font-bold text-gray-400'>
                                    {data.rating}
                                </div>
                            </div>
                            <div className='mt-10 text-white text-[1rem]'>
                                {data.synopsis}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

function Description({text, txt}) {
    return (<div className='flex'><div className='text-gray-200'>{text} </div><div className='text-gray-400 ml-2'>{txt}</div></div>)
}

export default Content;