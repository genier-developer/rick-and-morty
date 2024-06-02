import React, {useState} from "react";

export type Filter = {
    name: string
    status: string
}

const Filter: React.FC<{ setFilters: (filters: Filter) => void }> = ({setFilters}) => {
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')

    const handleApplyFilters = () => {
        setFilters({ name, status });
    }

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <button onClick={handleApplyFilters}>Apply</button>
        </div>
    )
};

export default Filter;