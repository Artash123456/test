import { FC, MutableRefObject, useCallback, useRef, useState } from 'react';
import { styled } from 'styled-components';

const MoviesCard: FC<{ data: Record<string, string> }> = ({ data }) => {
  const ref: MutableRefObject<HTMLVideoElement | null> = useRef(null);
  const [videoIsPlaying, setVideoIsplaying] = useState(false);
  const handleToggleVideo = useCallback(() => {
    sessionStorage.setItem('watched_video', data.Id);

    if (videoIsPlaying) {
      setTimeout(() => {
        setVideoIsplaying(false);
        ref.current?.play();
      }, 2000);
    } else {
      ref.current?.pause();
      setVideoIsplaying(true);
    }
  }, [data?.Id, videoIsPlaying]);

  return (
    <MovieContainer $img={data.CoverImage} onClick={handleToggleVideo}>
      {videoIsPlaying && (
        <video
          src={data.VideoUrl}
          ref={ref}
          onEnded={() => setVideoIsplaying(false)}
          onPause={() => setVideoIsplaying(false)}
        ></video>
      )}
    </MovieContainer>
  );
};

const MovieContainer = styled.div<{ $img: string }>`
  background-image: url(${({ $img }) => $img});
  height: 220px;
  min-width: 170px;
  overflow: hidden;
  > video {
    object-fit: contain;
  }
`;
export default MoviesCard;
