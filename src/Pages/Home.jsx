import React, {useContext, useState} from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { Loader, Error } from "./index"
import { useGetLatestQuery } from '../Redux/NewsApi/GoogleNews'
import Latest1 from './Latest1'
import Pagination from '../Components/Pagination'
import { Paginate } from '../assets/Pagination'
import languageContext from '../Context/Context'

function Latest() {

  const [currentPage, setCurrentpage] = useState(1)

  const { language } = useContext(languageContext)

  const { data, isLoading, error } = useGetLatestQuery(language);

  if (isLoading) return <Loader />

  
  if (error) return <Error />

  if (!data) return <div className='text-2xl text-center'>No results found</div>;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(data?.items.length / 10) && page != currentPage)
    setCurrentpage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const paginateItems = Paginate(data?.items, currentPage)

  return (

    <div className={`w-full min-h-screen mt-60  md:mt-40 mb-5 ${isLoading ? animate-pulse : ''}`}>
      

      {/* <LanguageSelector /> */}

          {
            paginateItems?.map((item, i) => (
              <Latest1 
                key = {i}
                data = {item}
                i = {i}
              />
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

export default Latest