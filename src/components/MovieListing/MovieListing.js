import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '~/features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import { Grid, Container } from 'semantic-ui-react';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    let renderMovies = '';

    return (
        <Container>
            <Grid>
                {
                    // eslint-disable-next-line no-unused-vars
                    (renderMovies =
                        movies.Response === 'True' ? (
                            movies.Search.map((item, index) => <MovieCard key={index} data={item} />)
                        ) : (
                            <div>
                                <h3>{movies.Error}</h3>
                            </div>
                        ))
                }
            </Grid>
        </Container>
    );
};

export default MovieListing;
