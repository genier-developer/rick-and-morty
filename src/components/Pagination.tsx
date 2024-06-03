import React from 'react';

export type Pagination = {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}

export const Pagination: React.FC<Pagination> = ({ page, setPage, totalPages }) => {
    return (
        <div className="pagination">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
            </button>
            <span>
        Page {page} of {totalPages}
      </span>
            <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                Next
            </button>
        </div>
    );
};

