import React from 'react';
import {Button, Stack, Typography} from "@mui/material";

export type Pagination = {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}

export const Pagination: React.FC<Pagination> = ({ page, setPage, totalPages }) => {
    return (
        <Stack spacing={2} direction="row" className="pagination">
            <Button variant={'contained'} onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
            </Button>
            <Typography variant={'h5'}>
        Page {page} of {totalPages}
            </Typography>
            <Button variant={'contained'} onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                Next
            </Button>
        </Stack>
    );
};

