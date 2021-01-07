import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import BookIcon from '@material-ui/icons/Book';
import VideocamIcon from '@material-ui/icons/Videocam';

const columns = [
    {
        minWidth: 170,
        label: 'Stock NO',
        id: 'stock-no'
    },
    {
        minWidth: 170,
        label: 'Shape',
        id: 'shape'
    },
    {
        minWidth: 170,
        label: 'Carat',
        id: 'carat'
    },
    {
        minWidth: 170,
        label: 'Clarity',
        id: 'clarity'
    },
    {
        minWidth: 170,
        label: 'Color',
        id: 'color'
    },
    {
        minWidth: 170,
        label: 'Cut',
        id: 'cut'
    },
    {
        minWidth: 170,
        label: 'Polish',
        id: 'polish'
    },
    {
        minWidth: 170,
        label: 'Symmetry',
        id: 'symmetry'
    },
    {
        minWidth: 170,
        label: 'Fluorescent',
        id: 'fluorescent'
    },
    {
        minWidth: 170,
        label: 'Culet',
        id: 'culet'
    },
    {
        minWidth: 170,
        label: 'Location',
        id: 'location'
    },
    {
        minWidth: 170,
        label: 'ImageLink',
        id: 'image-link'
    },
    {
        minWidth: 170,
        label: 'CertificateLink',
        id: 'certificate-link'
    },
    {
        minWidth: 170,
        label: 'VideoLink',
        id: 'video-link'
    },
    {
        minWidth: 170,
        label: 'PPC',
        id: 'ppc'
    },
    {
        minWidth: 170,
        label: 'TotalPrice',
        id: 'total-price'
    }
];

const useStyles = makeStyles({
    root: {
        width: '80vw',
        margin: '0 auto 0 auto',
        position: 'relative',
        height: 500,
        position: 'relative'
    },

    container: {
        height: 500
    },

    tableBody: {
        overflowX: 'scroll'
    },

    circularProgress: {
        position: 'absolute',
        margin: 'auto',
        right: '0',
        left: '0',
        top: '0',
        bottom: '0'
    }
});

export default function StickyHeadTable({ rows }) {
    const classes = useStyles();

    return (
            <Paper className={classes.root}>
                {rows ? <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}
                                    align="center"
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody className={classes.tableBody}>
                            {rows.map((row) => (
                                <TableRow style={{position: 'relative'}} hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.label];
                                        return (
                                            <TableCell key={column.id} align="center">
                                                {((column.label !== 'ImageLink') && (column.label !== 'CertificateLink') && (column.label !== 'VideoLink')) && value}
                                                {column.label === 'ImageLink' && value !== '' && 
                                                    <img 
                                                        style={{height: '1.7rem', loading: 'lazy'}} 
                                                        alt="diamond" 
                                                        src={value} 
                                                    />
                                                }
                                                {column.label === 'CertificateLink' && 
                                                    <a href={value}>
                                                        <BookIcon htmlColor="gray" />
                                                    </a>
                                                }
                                                {column.label === 'VideoLink' && 
                                                    <a href={value}>
                                                        <VideocamIcon htmlColor="gray" />
                                                    </a>
                                                }
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> : <CircularProgress className={classes.circularProgress} />}
            </Paper>
    );
}