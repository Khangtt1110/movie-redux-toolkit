import React, { useEffect } from 'react';
import movieApi from '~/common/apis/movieApi';
import { APIKEY } from '~/common/apis/MovieApiKey';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux/es/exports';
import { addMovies } from '~/features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    const movieSearch = 'Harry';
    useEffect(() => {
        const fetchMovie = async () => {
            const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieSearch}&type=movie`).catch((err) => {
                console.log('ERR', err);
            });
            dispatch(addMovies(response.data));
        };
        fetchMovie();
    }, []);
    return (
        <div>
            <MovieListing />
        </div>
    );
};

export default Home;
