import MovieTypeDropdown from './MovieTypeDropdown'
import Movies from './Movies'
import Search from './Search'

const Home = () => {
  return (
    <>
      <Search />
      <MovieTypeDropdown />
      <Movies />
    </>
  )
}

export default Home
