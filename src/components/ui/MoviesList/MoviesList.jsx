import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesList({movies, totalPages, page, setPage}) {
  return (
    <>
        <Stack>
            {movies.map(movie => (
                <Stack key={movie.kinopoiskId}>
                    <Link to={`/movie/${movie.kinopoiskId}`}>
                        <img src={movie.posterUrlPreview} alt={movie.nameOriginal ? movie.nameOriginal : movie.nameRu} />
                    </Link>
                    <Typography>{movie.nameOriginal ? movie.nameOriginal : movie.nameRu}</Typography>
                </Stack>
            ))}
        </Stack>
    </>
  );
}