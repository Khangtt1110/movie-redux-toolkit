import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';

const MovieCard = (props) => {
    const { data } = props;
    return (
        <Link to={`/movie/${data.imdbID}`}>
            <Card>
                <Image src={data.Poster} wrapped ui={true} />
                <Card.Content>
                    <Card.Header>{data.Title}</Card.Header>
                    <Card.Meta>{data.Year}</Card.Meta>
                    <Card.Description>{data.Type}</Card.Description>
                </Card.Content>
            </Card>
        </Link>
    );
};

export default MovieCard;
