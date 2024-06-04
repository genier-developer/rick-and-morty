import React, { useState } from 'react';

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
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Choose status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <button onClick={handleApplyFilters}>Apply</button>
        </div>
    );
};

