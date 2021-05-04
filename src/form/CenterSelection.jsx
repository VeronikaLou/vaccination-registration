import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useContext } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { CentersContext } from '../CentersContext'

export const CenterSelection = ({ setSelectedCenter, selectedCenter }) => {
    const centers = useContext(CentersContext);

    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Očkovací centrum</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedCenter}
                onChange={(event) => { setSelectedCenter(event.target.value) }}
            >
                {centers.map(center =>
                    <MenuItem key={center.id} value={center.centrumId}>{center.name}</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}