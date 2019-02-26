import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import EditIcon from '@material-ui/icons/Edit';
import TrashIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';

const row = (x, i, header, startEditing, handleRemove, editIdx, handleChange, stopEditing) => {

    const currentlyEditing = editIdx === i;

    return(
        <TableRow key={`tr-${i}`}>
            {
                header.map((y, k) => (
                    <TableCell key={`trc-${k}`}>
                        {currentlyEditing ? <TextField name={y.prop} onChange={e => handleChange(e, y.prop, i)} value={x[y.prop]} /> : x[y.prop]}
                    </TableCell>
                ))
            }
            <TableCell>
                {currentlyEditing ? <CheckIcon onClick={() => stopEditing(i)} /> : <EditIcon onClick={() => startEditing(i)} />}
                <TrashIcon onClick={() => handleRemove(i)} />
            </TableCell>
        </TableRow>
    )
}

export default ({data, header, startEditing, handleRemove, editIdx, handleChange, stopEditing}) =>
<Table>
    <TableHead>
        <TableRow>
            {
                header.map((x, i) => 
                    <TableCell key={`thc-${i}   `}>
                        {x.name}
                    </TableCell>
                )
            }
            <TableCell>
                Actions
            </TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
            {data.map((x, i) => row(x, i, header, startEditing, handleRemove, editIdx, handleChange, stopEditing))}
    </TableBody>
</Table>