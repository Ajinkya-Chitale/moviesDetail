import React, { useState } from 'react'

// Create Context
const AppContext = React.createContext();

// API URL Path
const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

// Image Not Available path
const imgPath = "../../src/assets/images/noImageAvailable.png";

// Context Provider so that we can share states between components
const AppProvider = ({ children }) => {
    // Create States for loading, movies data and error message
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const [errorAPI, setErrorAPI] = useState("");
    const [searchQuery, setSearchQuery] = useState("titanic");
    const [movieDetail, setMovieDetail] = useState("");
    const [totalResults, setTotalResults] = useState();
    const [page, setPage] = useState(1);
    const [type, setType] = useState('movie');

    return <AppContext.Provider value={{ loading, setLoading, movieList, setMovieList, errorAPI, setErrorAPI, searchQuery, setSearchQuery, movieDetail, setMovieDetail, totalResults, setTotalResults, page, setPage, type, setType }}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider, API_URL, imgPath }
