import React from 'react';
import { Button,makeStyles, Table,TableRow, TableBody, TableCell, TableHead } from '@material-ui/core';
import {categoriesData} from "../../constants/data.js"
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    create: {
        margin:20,
        background: '#0dcaf0',
        color: 'white',
        fontWeight: 'bold',
        width: '80%',
        '&:hover': {
            backgroundColor: 'rgb(7, 177, 77, 0.42)'
        }
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

const Categories = () => {
    const classes = useStyles();
    return (
        <>
            <Link to={`/projects/create`} className={ classes.link }><Button varient="outlined" className={ classes.create }>New Project</Button></Link>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link to={'/projects/'} className={classes.link}>
                                All Categories
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    categoriesData.map(category => (
                        <TableRow>
                            <TableCell>
                                <Link to={`/projects/?category=${category}`} className={classes.link}>
                                    {category}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>       
        </>
    )
}

export default Categories;
