import React, { useContext } from 'react'
import  { useGetLanguageQuery } from '../Redux/NewsApi/GoogleNews'
import languageContext from '../Context/Context';

function LanguageSelector({closeDropDown}) {

    const { language, setLanguage } = useContext(languageContext)

    const { data, isLoading, error } = useGetLanguageQuery();

    // console.log(data)

    if (isLoading) return <div className='absolute translate-y-1/2 translate-x-[20%] top-1/2 right-1/2'>Loading....</div>

    if (error) return <div className='absolute translate-y-1/2 -translate-x-[40%] top-1/2 right-1/2'>Error: {error.message}</div>;

    if (!data) return <div className='text-2xl text-center'>No results found</div>;



    const handleChange = (e) => {
        setLanguage(e.target.value)
        closeDropDown()
    }

  return (
    // <div className='w-fit flex justify-center items-center bg-slate-400 p-4 h-fit'>

        <div className="flex flex-col items-center justify-between mt-0 mb-0 sm:flex-row w-full overflow-scroll">
                <select
                    onChange={handleChange}
                    value={language}
                    className="bg-[#e2dfdf] sm:mt-0 mt-5 text-gray-800 rounded-md text-base outline-none border-none p-3 md:p-1 absolute translate-y-1/2 translate-x-[40%] top-1/2 right-1/2 selectLanguage overflow-scroll truncate"
                >
                    {data?.lr?.map((item) =>
                        <option value={item.code} key={item.code}
                        >
                            {item.name}
                        </option>
                    )}
                </select>
        </div>
    // </div>
  )
}

export default LanguageSelector




