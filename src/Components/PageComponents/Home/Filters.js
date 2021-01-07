import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import FilterItem from './FilterItem';
import NumericalFilterItem from './NumericalFilterItem';

const filters = [
    {
        filterName: 'Shape',
        filterProps: ['ROUND']
    },
    {
        filterName: 'Carat',
        variant: 'dialog'
    },
    {
        filterName: 'Color',
        filterProps: [
            'E', 'F', 'G', 'H', 'D', 'FANCY', 'I', 'S-T', 'Q-R'
        ]
    },
    {
        filterName: 'Clarity',
        filterProps: [
            'VVS1', 'VVS2', 'SI1', 'VS1', 'I2', 'VS2', 'SI2', 'IF'
        ]
    },
    {
        filterName: 'Cut',
        filterProps: ['EX', 'VG', 'GD']
    },
    {
        filterName: 'Polish',
        filterProps: ['EX', 'VG', 'GD']
    },
    {
        filterName: 'Symmetry',
        filterProps: ['EX', 'VG', 'GD']
    },
    {
        filterName: 'Fluorescent',
        filterProps: ['M', 'N', 'ST', 'F']
    }
];

const useStyles = makeStyles({
    list: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 25%)',
        gridTemplateRows: 'repeat(2, 50%)',
        margin: '0 auto 4rem auto',
        textAlign: 'center',
        gap: '1rem'
    }
});

const Filters = ({ allAppliedFilterProps, onSubmitFilters }) => {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            {filters.map((f, i) => (
                <li>
                    {
                        i === 1  
                            ? <NumericalFilterItem 
                                key={i}
                                appliedFilterProps={allAppliedFilterProps.CARAT}
                                onSubmitFilters={onSubmitFilters}
                                {...f}
                            />
                            : <FilterItem
                                key={i}
                                appliedFilterProp={allAppliedFilterProps[f.filterName.toUpperCase()]}
                                {...f}
                                onSubmitFilters={onSubmitFilters}
                            />
                    }
                </li>
            ))}    
        </List>
    );
}

export default Filters;