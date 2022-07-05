import React, { useEffect } from 'react';

import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '~/features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    const movieData = 'Harry';
    const seriesData = 'Friend';

    useEffect(() => {
        dispatch(fetchAsyncMovies(movieData));
        dispatch(fetchAsyncSeries(seriesData));
    }, [dispatch]);
    return (
        <div>
            <MovieListing />
        </div>
    );
};

export default Home;
