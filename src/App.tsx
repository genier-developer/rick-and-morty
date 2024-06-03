import React, { useState } from 'react';
import Characters from './components/Characters';
import {Filter} from './components/Filter';
import './App.css';

const App: React.FC = () => {
    const [filters, setFilters] = useState({ name: '', status: '' });

    return (
        <div className="App">
            <h1>Rick and Morty Characters</h1>
            <Filter setFilters={setFilters} />
            <Characters filters={filters} />
        </div>
    );
};

export default App;
