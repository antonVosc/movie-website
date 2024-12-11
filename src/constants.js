import {
  AutoAwesome,
  Bloodtype,
  Fort,
  LocalMovies,
  MenuBook,
  Reorder,
  StarPurple500,
} from "@mui/icons-material";

export const iconComponents = {
  AutoAwesome,
  Bloodtype,
  MenuBook,
  StarPurple500,
  LocalMovies,
  Reorder,
  Fort,
};

export const TOP_LISTS = [
  {
    title: "TOP 100 Popular Movies",
    icon: "AutoAwesome",
    url: "/popular",
    value: "TOP_POPULAR_MOVIES",
  },
  {
    title: "TOP 250 Best Movies",
    icon: "StarPurple500",
    url: "/best",
    value: "TOP_250_MOVIES",
  },
  {
    title: "Vampires",
    icon: "Bloodtype",
    url: "/vampire",
    value: "VAMPIRE_THEME",
  },
  {
    title: "Comics",
    icon: "MenuBook",
    url: "/comics",
    value: "COMICS_THEME",
  },
];

export const MOVIE_LISTS = [
  {
    title: "Movies",
    icon: "LocalMovies",
    url: "/films",
  },
  {
    title: "Series",
    icon: "Reorder",
    url: "/series",
  },
  {
    title: "Cartoons",
    icon: "Fort",
    url: "/cartoons",
  },
];
