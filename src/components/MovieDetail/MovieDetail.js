import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Container, Image, Loader } from 'semantic-ui-react';
import { fetchAsyncDetail, getDetail, removeDetail } from '~/features/movies/movieSlice';

const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getDetail);
    useEffect(() => {
        dispatch(fetchAsyncDetail(imdbID));
        return () => {
            dispatch(removeDetail());
        };
    }, [dispatch, imdbID]);
    return (
        <Container>
            {Object.keys(data).length === 0 ? (
                <div>Loading ....</div>
            ) : (
                <Card>
                    <Image src={data.Poster} />
                    <Card.Header>{data.Title}</Card.Header>
                    <Card.Content>
                        <Card.Description>{data.Plot}</Card.Description>
                    </Card.Content>
                </Card>
            )}
        </Container>
    );
};

export default MovieDetail;
