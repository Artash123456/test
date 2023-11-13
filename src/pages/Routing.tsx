import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import TVShows from './TVShows';
import Movies from './Movies';
import Genres from './Genres';
import WatchLater from './WatchLater';
import { Navigation } from 'components';
import { styled } from 'styled-components';

const Routing = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  > nav,
  > div {
    overflow: auto;
  }
`;
export default Routing;
