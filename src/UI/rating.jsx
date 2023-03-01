import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function ProductRating({value}) {
    return (
        <Stack spacing={1}>
            <Rating name="half-rating-read" value={value} precision={0.1} readOnly />
        </Stack>
    );
}
