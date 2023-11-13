import { createSlice } from '@reduxjs/toolkit';
import img1 from 'assets/https_specials-1.png';
import img2 from 'assets/https_specials-2.png';
import img3 from 'assets/https_specials-3.png';
import img4 from 'assets/https_specials-4.png';
import img5 from 'assets/https_specials-5.png';
import img6 from 'assets/https_specials-6.png';
import img7 from 'assets/https_specials-7.png';
import img8 from 'assets/https_specials-8.png';
import img9 from 'assets/FeaturedCoverImage.png';
import img10 from 'assets/FeaturedTitleImage.png';
const initialState = {
  tranding: [
    {
      Id: '1',
      Title: 'Title 1',
      CoverImage: img1,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-10-24T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '2000',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '2',
      Title: 'Title 2',
      CoverImage: img2,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-10-12T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'TV Show',
      Duration: '2300',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '3',
      Title: 'Title 3',
      CoverImage: img3,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-10-11T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '6000',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '4',
      Title: 'Title 4',
      CoverImage: img4,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-10-10T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '4000',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '5',
      Title: 'Title 5',
      CoverImage: img5,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-10-15T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'TV Show',
      Duration: '5300',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '6',
      Title: 'Title 6',
      CoverImage: img6,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-10-22T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'TV Show',
      Duration: '1200',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '7',
      Title: 'Title 7',
      CoverImage: img7,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-11-22T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '4500',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '8',
      Title: 'Title 8',
      CoverImage: img8,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-07-14T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'TV Show',
      Duration: '2000',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '9',
      Title: 'Title 9',
      CoverImage: img1,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-04-03T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '2300',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '10',
      Title: 'Title 10',
      CoverImage: img2,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-11-23T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '6000',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '11',
      Title: 'Title 11',
      CoverImage: img3,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-11-04T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'TV Show',
      Duration: '1200',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '12',
      Title: 'Title 12',
      CoverImage: img4,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-03-03T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '3400',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '13',
      Title: 'Title 13',
      CoverImage: img5,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-12-30T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '6500',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '14',
      Title: 'Title 14',
      CoverImage: img6,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-07-10T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '5000',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '15',
      Title: 'Title 15',
      CoverImage: img7,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-05-14T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '1300',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '16',
      Title: 'Title 16',
      CoverImage: img8,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-03-25T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'Movie',
      Duration: '5000',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '17',
      Title: 'Title 17',
      CoverImage: img1,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-08-24T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'TV Show',
      Duration: '400',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
    {
      Id: '18',
      Title: 'Title 18',
      CoverImage: img2,
      TitleImage: 'FeaturedTitleImage.png',
      Date: '2021-07-21T12:16:50.894556',
      ReleaseYear: '2021',
      MpaRating: '18+',
      Category: 'TV Show',
      Duration: '1200',
      VideoUrl:
        'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      Description: 'Info About it',
    },
  ],
  featured: {
    Id: '1',
    Title: 'The Irishman',
    CoverImage: img9,
    TitleImage: img10,
    Date: '2021-10-24T12:16:50.894556',
    ReleaseYear: '2021',
    MpaRating: '18+',
    Category: 'Movie',
    Duration: '6000',
    Description: 'Info About it',
  },
};
export const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    sortVideos: (state, action) => {
      if (action.payload) {
        let arr = [];
        for (let tranding of JSON.parse(JSON.stringify(state.tranding))) {
          if (String(action.payload) === String(tranding.Id)) {
            arr.unshift(tranding);
          } else {
            arr.push(tranding);
          }
        }
        state.tranding = arr;
      }
    },
  },
});

export const { sortVideos } = movies.actions;
