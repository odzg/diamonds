import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    summary: {
        padding: '3% 2rem 3% 2rem'
    }
});

const Summary = () => {
    const classes = useStyles();

    return (
        <section
            className={classes.summary}
        >
            <h1
                className={classes['number-of-diamonds']}
            >
                Number of diamonds: 99
            </h1>
            <h1
                className={classes['total-price']}
            >
                Total price: <i className={classes['total-price-sum']}>$47610.37</i>
            </h1>
        </section>
    );
}

export default Summary;