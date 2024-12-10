import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <Stack>
      <Link to={`/movie/${movie.kinopoiskId}`}>
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameOriginal ? movie.nameOriginal : movie.nameRu}
          className={styles.img}
        />
      </Link>
      <Typography>
        {movie.nameOriginal ? movie.nameOriginal : movie.nameRu}
      </Typography>
    </Stack>
  );
}
