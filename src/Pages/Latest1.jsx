import React from 'react'
import { Link } from 'react-router-dom'
import { convertTimestampToTime } from '../assets/convertTimeStamp';

function Latest1({data, i}) {

  // const timestamp = convertTimestampToTime(timestamp);

  return (
    <div className='mx-1 vv:mx-4 vd:mx-8 sm:mx-12 lg:mx-40 flex flex-col md:flex-row justify-around items-center my-4 p-1' key={i}>
      <div className="left w-[90%] md:w-3/5 h-full px-4 mr-2 flex flex-col top-0 gap-y-1.5 order-2 md:order-1">
        {data?.hasSubnews ? <Link to={'/subnews'} state={data}>
          <h1 className='font-bold text-lg text-pretty underline hover:underline-offset-2'>{data.title}</h1>
        </Link> : <h1 className='font-bold text-lg text-pretty'>{data.title}</h1>}
        <p className='text-pretty w-11/12 font-sans1'>{data?.snippet}</p>
        <a href={data?.newsUrl} target="_blank" rel="noopener noreferrer" className='font-sans1'>Publisher: {data.publisher}</a>
        <p className='text-slate-400'>{data?.timestamp ? convertTimestampToTime(data?.timestamp) : ''}</p>
      </div>
      <div className="right w-[90%] md:w-[45%] lg:w-[30%] justify-center flex p-4 order-1 md:order-2">
      <img src={data?.images?.thumbnailProxied} alt={data?.images} className={data?.images?.thumbnailProxied ? `w-full h-full object-contain rounded-md shadow-md` : ''} />
      </div>
    </div>
  )
}

export default Latest1