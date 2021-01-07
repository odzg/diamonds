import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import v from 'voca';

import Summary from './Summary';
import Filters from './Filters';
import Table from './Table';

const initialAppliedFilterProps = {
    SHAPE: null,
    CARAT: {
        min: null,
        max: null
    },
    COLOR: null,
    CLARITY: null,
    CUT: null,
    POLISH: null,
    SYMMETRY: null,
    FLUORESCENT: null
};

const useStyles = makeStyles({

});

const Root = () => {
    const classes = useStyles();
    const [rows, setRows] = useState(null);
    const [allAppliedFilterProps, setAllAppliedFilterProps] = useState(initialAppliedFilterProps);
    const allRows = useRef(null);

    useEffect(() => {
        fetch('./data.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then(data => {
                allRows.current = data;
                setRows(data);
                console.log(data);
            });
    }, []);

    const onSubmitFilters = (data) => {
        const allAppliedFPs = {
            ...allAppliedFilterProps,
            ...data
        };
        allRows.current = allRows.current.map((r) => {
            for (var afp in allAppliedFPs) {
                console.log(afp.valueOf)
                let camelized = v.lowerCase(afp);
                camelized = v.camelCase(camelized);
                camelized = v.capitalize(camelized);
                if (afp && (r[camelized] === afp)) {
                    return r;
                }
            }
        })
        setAllAppliedFilterProps(prev => ({
            ...prev,
            ...data
        }));
        
    }

    return (
        <>
            <Summary />
            <Filters
                allAppliedFilterProps={allAppliedFilterProps}
                onSubmitFilters={onSubmitFilters}
            />
            <Table
                rows={rows}
                allAppliedFilterProps={allAppliedFilterProps}
            />
        </>
    );
}

export default Root;