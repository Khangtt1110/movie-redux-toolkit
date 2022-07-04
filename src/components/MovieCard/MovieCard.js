import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

const MovieCard = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <Grid.Column computer={4} tablet={5} mobile={8}>
            <Card>
                <Image src={data.Poster} wrapped ui={true} />
                <Card.Content>
                    <Card.Header>{data.Title}</Card.Header>
                    <Card.Meta>{data.Year}</Card.Meta>
                    <Card.Description>{data.Type}</Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
};

export default MovieCard;
