import { FeaturedCard } from 'components';
import MoviesCard from 'components/MoviesCard';
import { useEffect } from 'react';
import { sortVideos } from 'redux/reducers/movies';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'utils/hooks';
const Home = () => {
  const { featured, tranding } = useSelector(({ movies }) => movies);
  const watched_video = sessionStorage.getItem('watched_video');
  const parsed = watched_video && JSON.parse(watched_video);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sortVideos(parsed));
  }, [dispatch, parsed]);
  return (
    <HomeContainer $img={featured.CoverImage}>
      <FeaturedCard />
      <p>Tranding Now</p>
      <div>
        {tranding.map((item) => (
          <MoviesCard data={item} key={item.Id} />
        ))}
      </div>
    </HomeContainer>
  );
};
const HomeContainer = styled.div<{ $img: string }>`
  background-image: url('${({ $img }) => $img}');
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding-left: 16px;
  > p {
    color: #fff;
    font-size: 1.8rem;
    margin-top: 35px;
    margin-bottom: 16px;
  }
  > div:last-child {
    overflow-x: scroll;
    display: flex;
    width: 97%;
    > div:not(:last-child) {
      margin-right: 16px;
    }
  }
`;
export default Home;
