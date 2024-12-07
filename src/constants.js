import {AutoAwesome, Bloodtype, FamilyRestroom, Fort, LiveTv, LocalMovies, MenuBook, MoodBad, Pool, Reorder, StarPurple500, ViewCarousel, VolunteerActivism } from '@mui/icons-material';

export const iconComponents = {AutoAwesome, Bloodtype, FamilyRestroom, LiveTv, MenuBook, MoodBad, Pool, StarPurple500, VolunteerActivism, LocalMovies, Reorder, Fort, };

export const TOP_LISTS = [
    {
      title: 'TOP 100 Popular Movies',
      icon: 'AutoAwesome',
      url: '/popular',
      value: 'TOP_POPULAR_MOVIES',
    },
    {
      title: 'TOP 250 Best Movies',
      icon: 'StarPurple500',
      url: '/best',
      value: 'TOP_250_MOVIES',
    },
    {
      title: 'Vampires',
      icon: 'Bloodtype',
      url: '/vampire',
      value: 'VAMPIRE_THEME',
    },
    {
      title: 'Comics',
      icon: 'MenuBook',
      url: '/comics',
      value: 'COMICS_THEME',
    },
    {
      title: 'Releases',
      icon: 'LocalMovies',
      url: '/releases',
      value: 'CLOSES_RELEASES',
    },
    { 
      title: 'Family',
      icon: 'FamilyRestroom',
      url: '/family',
      value: 'FAMILY',
    },
    {
      title: 'Oscar Winners',
      icon: 'LocalMovies',
      url: '/oskar',
      value: 'OSKAR_WINNERS_2021',
    },
    {
      title: 'Romantics',
      icon: 'VolunteerActivism',
      url: '/romantic',
      value: 'LOVE_THEME',
    },
    {
      title: 'Zombies',
      icon: 'MoodBad',
      url: '/zombie',
      value: 'ZOMBIE_THEME',
    },
    {
      title: 'Catastrophe',
      icon: 'Pool',
      url: '/catastrophe',
      value: 'CATASTROPHE_THEME',
    },
    {
      title: 'Popular Series',
      icon: 'LiveTv',
      url: '/popular-series',
      value: 'POPULAR_SERIES',
    },
];

export const MOVIE_LISTS = [
  {
    title: 'Movies',
    icon: 'LocalMovies',
    url: '/films',
  },
  {
    title: 'Series',
    icon: 'Reorder',
    url: '/series',
  },
  {
    title: 'Cartoons',
    icon: 'Fort',
    url: '/cartoons',
  },
];