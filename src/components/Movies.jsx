import React, { useContext, useEffect } from 'react'
import { API_URL, AppContext } from '../Context/context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movieList, loading, setLoading, setMovieList, searchQuery, setErrorAPI } = useContext(AppContext);

  // Function to get list of movies
  const getMoviesList = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setLoading(false);
        setMovieList(data.Search);
        setErrorAPI("");
      }
      else {
        setErrorAPI(data.Error);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  // To fetch data when page first time gets loaded and using debouncing technique
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMoviesList(`${API_URL}&s="${searchQuery}"`);
    }, 500);

    return () => clearTimeout(timerOut);
  }, [searchQuery])

  if (loading) {
    return (
      <div className='movieSection'>
        <div className='loading text-center'>Loading...</div>
      </div>
    );
  }

  return (
    <section className=" bg-blue-500ray-50" >
      <div className="block relative bg-opacity-50  z-40">
        <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {
                movieList.map((list) => {
                  const { imdbID, Title, Poster } = list;
                  const movieTitle = Title.substring(0, 15);

                  return (
                    <NavLink key={imdbID} to={`movie_details/${imdbID}`} className="transition-all duration-200 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-40 border-2 group">
                      <div div className="py-1 px-5 relative">
                        <h3 className="mb-3 text-center text-lg font-semibold text-black group-hover:text-white group-hover:-translate-y-2">{(movieTitle.length >= 15) ? `${movieTitle}...` : movieTitle}</h3>
                        <img className='group-hover:scale-110' src={Poster} alt={Title} />
                      </div>
                    </NavLink>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div >
    </section>
  )
}

export default Movies