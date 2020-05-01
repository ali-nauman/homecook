import React from 'react';

import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

export default function Product(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={props.picture}
                title={props.name}
            />

            <CardContent>

                <Typography variant="h5">
                    {props.name}
                </Typography>

                <Typography variant="body">
                    Rs. {props.price}<br></br>
                    Serves: {props.serving}<br></br>
                </Typography>

                <Button variant="contained" color="primary">
                    Add to Order
                </Button>

            </CardContent>
        </Card>
    );
}