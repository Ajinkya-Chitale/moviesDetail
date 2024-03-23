import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL, AppContext, imgPath } from '../Context/context';

const MovieDetails = () => {
  const { id } = useParams();
  const { loading, setLoading, movieDetail, setMovieDetail } = useContext(AppContext);
  const navigate = useNavigate();

  const getMovieDetails = async (url) => {
    setLoading(true);

    try {
      const data = await fetch(url);
      const response = await data.json();

      setMovieDetail(response);
      setLoading(false);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    let setTimer = setTimeout(() => {
      getMovieDetails(`${API_URL}&i=${id}`);
    }, 500);

    return () => clearTimeout(setTimer);
  }, [id])

  if (loading) {
    return (
      <div className='movieSection'>
        <div className='loading text-center'>Loading...</div>
      </div>
    );
  }

  return (
    < section className="text-gray-700 body-font overflow-hidden" >
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/5 mx-auto flex flex-wrap justify-center bg-white p-9 shadow">
          <img alt={movieDetail.Title} className="lg:w-2/5 w-full object-cover object-center rounded border border-gray-200" src={(movieDetail.Poster === "N/A") ? imgPath : movieDetail.Poster} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-3xl title-font mb-2">{movieDetail.Title}</h1>
            <p><strong className='me-2'>Released:</strong>{movieDetail.Released}</p>
            <p className='flex flex-wrap'><strong className='me-2'>Genre:</strong> {movieDetail.Genre}</p>
            <p><strong className='me-2'>Rating:</strong>{`${movieDetail.imdbRating} / 10`} </p>
            <p><strong className='me-2'>Country:</strong>{movieDetail.Country}</p>
            <button
              className="middle none center mt-4 mr-4 rounded-sm bg-green-500 py-3 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true" onClick={() => { navigate('/') }}>Go Back</button>
          </div>
        </div>
      </div>
    </ section >
  )
}

export default MovieDetails
