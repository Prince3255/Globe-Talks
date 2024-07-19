import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useGetScienceQuery } from '../Redux/NewsApi/GoogleNews'
import { NewsApi } from '../Redux/NewsApi/GoogleNews'
import  { Loader, Error } from '../Pages/index'
import Pagination from '../Components/Pagination'
import { Paginate } from '../assets/Pagination'
import { convertTimestampToTime } from '../assets/convertTimeStamp'
import { Link } from 'react-router-dom'
import languageContext from '../Context/Context'

function Science() {

  const [currentPage, setCurrentpage] = useState(1)
  const [hover, setHover] = useState(false)
  const dispatch = useDispatch();

  const { language } = useContext(languageContext)
  const handleMouseEnter = () => {

    if (!hover) {
      dispatch(NewsApi.util.prefetch('getScience', undefined, {force: true}));
      setHover(true)
    }
  }

  const { data, isLoading, error } = useGetScienceQuery(language)

  if (isLoading) return <Loader />

  if (error) return <Error />

  if (!data) return <div className='text-2xl text-center'>No results found</div>;

  const paginateItems = Paginate(data?.items, currentPage)


  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(data?.items.length / 10) && page != currentPage)
    setCurrentpage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div onMouseEnter={handleMouseEnter} className={`w-full min-h-screen mt-60 md:mt-40 mb-5 ${isLoading ? animate-pulse : ''}`}>
      <h1 className='text-center text-2xl font-serif my-10'>Scientific Discoveries and Innovations</h1>
      {
            paginateItems?.map((item, i) => (
              <div className='mx-1 vv:mx-4 vd:mx-8 sm:mx-12 lg:mx-40 flex flex-col md:flex-row justify-around items-center my-4 p-1' key={i}>
                <div className="left w-[90%] md:w-3/5 h-full px-4 mr-2 flex flex-col top-0 gap-y-1.5 order-2 md:order-1">
                  {item?.hasSubnews ? <Link to={'/subnews'} state={item}>
                    <h1 className='font-bold text-lg text-pretty underline hover:underline-offset-2'>{item.title}</h1>
                  </Link> : <h1 className='font-bold text-lg text-pretty'>{item.title}</h1>}
                  <p className='text-pretty w-11/12 font-sans1'>{item?.snippet}</p>
                  <a href={item?.newsUrl} target="_blank" rel="noopener noreferrer" className='font-sans1'>Publisher: {item.publisher}</a>
                  <p className='text-slate-400'>{item?.timestamp ? convertTimestampToTime(item?.timestamp) : ''}</p>
                </div>
                <div className="right w-[90%] md:w-[45%] lg:w-[30%] justify-center flex p-4 order-1 md:order-2">
                <img src={item?.images?.thumbnailProxied} alt={item?.images} className={item?.images?.thumbnailProxied ? `w-full h-full object-contain rounded-md shadow-md` : ''} />
                </div>
              </div>
            ))
          }
      <Pagination 
            totalItems={data?.items.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Science
