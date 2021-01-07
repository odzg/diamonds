import React, { useState, useRef } from 'react';
import { Button, Popover, MenuItem, MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        width: '150px',
        height: '60px',
        padding: ''
    },
    buttonLabel: {
        display: 'block'
    }
});

const SelectButton = ({
    handleClick,
    filterName,
    appliedFilterProp,
    ref
}) => {
    const classes = useStyles();

    return (
        <Button 
            variant="contained" 
            color="primary" 
            onClick={handleClick}
            className={classes.button}
            ref={ref}
            classes={{ label: classes.buttonLabel }}
        >
            <span>{filterName}</span>
            {appliedFilterProp && <span>{appliedFilterProp}</span>}
        </Button>
    );
}

const FilterItem = ({
    filterName,
    filterProps = null,
    appliedFilterProp,
    onSubmitFilters
}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const buttonRef = useRef();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    } 

    const handleMenuItemClick = (event) => {
        setAnchorEl(null);
        onSubmitFilters({[filterName]: event.value});
    }
    
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <SelectButton 
               handleClick={handleClick}
               filterName={filterName}
               appliedFilterProp={appliedFilterProp}
               ref={buttonRef}
           />  
           <Popover
               open={Boolean(anchorEl)}
               anchorEl={anchorEl}
               onClose={handleClose}
               anchorOrigin={{
                   vertical: 'bottom',
                   horizontal: 'center',
               }}
               transformOrigin={{
                   vertical: 'top',
                   horizontal: 'center',
               }}
           >
               <MenuList>
                   {filterProps.map((fp, index) => (
                       <MenuItem 
                           key={index}
                           selected={fp === appliedFilterProp}
                           onClick={(event) => handleMenuItemClick(event, index)}
                       >
                           {fp}
                       </MenuItem>
                   ))}
               </MenuList>
           </Popover>
        </div>
    );
}

export default FilterItem;