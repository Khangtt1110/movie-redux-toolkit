import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '~/features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import { Grid, Container } from 'semantic-ui-react';
import Slider from 'react-slick';
import { settings } from '~/common/settingCarousel';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const series = useSelector(getAllSeries);

    let renderMovies,
        renderSeries = '';

    renderMovies =
        movies.Response === 'True' ? (
            movies.Search.map((item, index) => <MovieCard key={index} data={item} />)
        ) : (
            <div>
                <h3>{movies.Error}</h3>
            </div>
        );

    renderSeries =
        series.Response === 'True' ? (
            series.Search.map((item, index) => <MovieCard key={index} data={item} />)
        ) : (
            <div>
                <h3>{series.Error}</h3>
            </div>
        );

    return (
        <Container>
            <Slider {...settings}>{renderMovies}</Slider>
            <Grid>{renderSeries}</Grid>
        </Container>
    );
};

export default MovieListing;
