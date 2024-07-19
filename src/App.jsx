import { useState, useEffect } from 'react'
import './App.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Latest, Science, Sport, World, Technology, Health, Business, Entertainment, SubNews, About, Contact, Search } from './Pages/index.js'
// import LanguageSelector from './Components/LanguageSelector.jsx';
// import { SportsLoader, EntertainmentLoader, HealthLoader, TechnologyLoader, ScienceLoader, WorldLoader, BuisnessLoader } from './assets/Loader.js';
import LanguageContextProvider from './Context/LanguageContextProvider.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* <Route path='' exact element={<Latest />}/> */}
      <Route path='' element={<Latest />}/>
      <Route path='subnews' element={<SubNews />}/>
      <Route path='world' element={<World />}/>
      <Route path='science' element={<Science/>}/>
      <Route path='sports' element={<Sport />}/>
      <Route path='technology' element={<Technology />}/>
      <Route path='health' element={<Health />}/>
      <Route path='business' element={<Business />}/>
      <Route path='entertainment' element={<Entertainment />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='search' element={<Search />}/>
      {/* <Route path='language' element={<LanguageSelector />} /> */}
    </Route>
  )
)

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a loading process
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    // <div>
    //   {loading && <Loader />}
    //   <div className={loading ? 'filter blur-sm' : ''}>
    //   </div>
    //   <RouterProvider router={router}/>
    // </div>
      <>
        <LanguageContextProvider>
          <RouterProvider router={router}/>
        </LanguageContextProvider>
      </>
  )
}

export default App
