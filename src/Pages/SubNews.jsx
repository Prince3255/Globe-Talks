import React from 'react'
import { useLocation } from 'react-router-dom'
import { convertTimestampToTime } from '../assets/convertTimeStamp';

function SubNews() {

    const location = useLocation()
    const data = location.state

    if (!data) return <div className='text-2xl text-center'>No results found</div>;

    // console.log(data)

  return (
    <div className='flex flex-col w-full min-h-screen mt-52 md:mt-32 mb-5'>
        <div className='mx-1 vs:mx-auto w-full vs:w-[90%] md:w-3/4 min-h-fit p-4 mt-12 mb-4'>
            <h1 className='font-semibold font-serif text-2xl vs:text-3xl md:text-4xl text-pretty'>{data.title}</h1>
            <div className='flex justify-center items-center my-7 md:my-4'>
                <img src={data?.images?.thumbnailProxied} alt={data?.images} className={data?.images?.thumbnailProxied ? 'w-[80%] h-[80%] md:w-1/2 md:h-1/2 object-contain rounded-md shadow-md' : ''}/>
            </div>
            <p className='text-pretty w-11/12 font-sans1 text-lg'>{data?.snippet}</p>
            <a href={data?.newsUrl} target="_blank" rel="noopener noreferrer" className='font-sans1 text-lg'>Publisher: {data.publisher}</a>
            <p className='text-slate-400 lining-nums font-sans text-lg'>{data?.timestamp ? convertTimestampToTime(data?.timestamp) : ''}</p>
            <hr className='border-t-4 md:border-t-2 my-4'/>
            {
                data?.subnews.map((item,i) => (
                    <div className='flex flex-col justify-between items-center p-1 min-h-fit my-8' key={i}>
                        <h1 className='font-medium font-sans1 text-2xl text-pretty'>{item?.title}</h1>
                        <div className={item?.images?.thumbnailProxied ? 'flex flex-col sm:flex-row justify-between items-center w-full h-full gap-x-4 mt-7 sm:mt-4' : 'w-full h-full mt-4'}>
                            <div className='left w-[75%] sm:w-[40%] md:w-1/4 h-full flex justify-center items-center'>
                                <img src={item?.images?.thumbnailProxied} alt={item?.images} className={item?.images?.thumbnailProxied ? `w-full h-full object-contain p-1 rounded-xl shadow-sm` : ''} />
                            </div>
                            <div className="right w-[80%] sm:w-3/4 p-4 flex flex-col justify-center gap-y-1 text-lg">
                                <p className='text-pretty w-full'>{item?.snippet}</p>
                                <a href={item?.newsUrl} target="_blank" rel="noopener noreferrer">Publisher: {item.publisher}</a>
                                <p className='text-slate-400 lining-nums'>{item?.timestamp ? convertTimestampToTime(item?.timestamp) : ''}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SubNews