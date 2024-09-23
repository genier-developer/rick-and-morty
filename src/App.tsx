import React, { useState } from 'react';
import Characters from './components/Characters';
import {Filter} from './components/Filter';
import './App.css';
import {Container, Typography} from "@mui/material";

const App: React.FC = () => {
    const [filters, setFilters] = useState({ name: '', status: '' });

    return (
        <Container className="App">
            <Typography className="typography"
                        variant={'h2'}
                        margin={3}
                        fontWeight={'700'}>
                Rick and Morty Characters
            </Typography>
            <Filter setFilters={setFilters} />
            <Characters filters={filters} />
        </Container>
    );
};

export default App;
