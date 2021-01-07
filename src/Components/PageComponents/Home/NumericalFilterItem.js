import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        width: '150px',
        height: '60px'
    },
    buttonLabel: {
        display: 'block'
    }
});

const SelectButton = ({
    handleClick,
    appliedFilterProps
}) => {
    const classes = useStyles();

    return (
        <Button 
            variant="contained" 
            color="primary" 
            onClick={handleClick}
            className={classes.button}
            classes={{ label: classes.buttonLabel }}
        >
            <span>CARAT</span>
            {appliedFilterProps && 
                <span
                    style={{fontSize: '0.7rem'}}
                >
                    {`${appliedFilterProps.min} - ${appliedFilterProps.max}`}
                </span>
            }
        </Button>
    );
}

const NumericalFilterItem = ({
    appliedFilterProps,
    onSubmitFilters
}) => {
    const [open, setOpen] = useState(null);
    const [inputValue, setInputValue] = useState({
        min: null,
        max: null
    });

    const handleClick = () => {
        setOpen(true);
    } 

    const onCloseHandler = () => {
        setOpen(false);
    }

    const onSubmitHandler = () => {
        onSubmitFilters({
            CARAT: {
                ...inputValue
            }
        });
        onCloseHandler();

    }

    const onMinChangeHandler = (event) => {
        setInputValue(prevValue => ({
            ...prevValue,
            min: event.value
        }))
    }

    const onMaxChangeHandler = (event) => {
        setInputValue(prevValue => ({
            ...prevValue,
            max: event.value
        }))
    }

    return (
        <div>
            <SelectButton  
                handleClick={handleClick}
                appliedFilterProps={appliedFilterProps}
            />
            <Dialog
                open={open}
                onClose={onCloseHandler}
            >
                <DialogContent style={{marginBottom: '2rem'}}>
                    <DialogTitle disableTypography style={{marginBottom: '1rem'}}>
                        Please choose Min and Max Numbers
                    </DialogTitle>
                    <TextField
                        onChange={onMinChangeHandler}
                        margin="dense"
                        label="Min"
                        type="number"
                        fullWidth
                        value={inputValue.min && inputValue.min}
                        defaultValue={appliedFilterProps.min}
                    />
                    <TextField
                        onChange={onMaxChangeHandler}
                        margin="dense"
                        label="Max"
                        type="number"
                        fullWidth
                        value={inputValue.max && inputValue.max}
                        defaultValue={appliedFilterProps.max}
                    />  
                </DialogContent>
                <DialogActions disableSpacing>
                    <Button onClick={onSubmitHandler} color="primary" variant="contained">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default NumericalFilterItem;