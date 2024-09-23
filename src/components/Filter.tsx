import React, { useState } from 'react';
import {Select, TextField, Button, MenuItem, FormControl, InputLabel} from "@mui/material";

interface Filters {
    name: string;
    status: string;
}

export const Filter: React.FC<{ setFilters: (filters: Filters) => void }> = ({ setFilters }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const handleApplyFilters = () => {
        setFilters({ name, status });
    };

    return (
        <div className="filter">
            <TextField
                size={'small'}
                variant="outlined"
                placeholder={'Enter character name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <FormControl size={'small'} sx={{m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Choose status</InputLabel>
                <Select value={status} label={'Choose status'} onChange={(e) => setStatus(e.target.value)}>
                <MenuItem value="alive">Alive</MenuItem>
                <MenuItem value="dead">Dead</MenuItem>
                <MenuItem value="unknown">Unknown</MenuItem>
                </Select>
                </FormControl>
            <Button variant={'contained'} onClick={handleApplyFilters}>Apply</Button>
        </div>
    );
};

