import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'utils/hooks';
import Button from './Button';
import { BsFillPlayFill } from 'react-icons/bs';
const FeaturedCard = () => {
  const { featured } = useSelector(({ movies }) => movies);

  return (
    <FeaturedContainer>
      <p>{featured.Category}</p>
      <img src={featured.TitleImage} alt="" />
      <p>
        {new Date(featured.Date).toLocaleString('UTC', { year: 'numeric' })}{' '}
        {featured.MpaRating} {featured.Duration}
      </p>
      <p>{featured.Description}</p>
      <div>
        <ButtonPlay>
          <BsFillPlayFill />
          Play
        </ButtonPlay>
        <ButtonMore>More Info</ButtonMore>
      </div>
    </FeaturedContainer>
  );
};
const ButtonPlay = styled(Button)`
  display: flex;
  align-items: center;
  margin-right: 16px;
  > svg {
    margin-right: 3px;
    font-size: 1.8rem;
  }
`;
const ButtonMore = styled(Button)`
  background-image: linear-gradient(-90deg, blue, #000000a6);
`;
const FeaturedContainer = styled.div`
  margin-top: 100px;

  p {
    font-size: 1.6rem;
  }
  p:first-child {
    color: gray;
    text-transform: uppercase;
    font-weight: 600;
  }
  > img {
    width: 400px;
  }
  > p:not(:first-child) {
    color: #fff;
  }
  > div {
    display: flex;
  }
`;
export default FeaturedCard;
