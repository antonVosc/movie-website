import {AutoAwesome, Bloodtype, FamilyRestroom, Fort, LiveTv, LocalMovies, MenuBook, MoodBad, Pool, Reorder, StarPurple500, VolunteerActivism } from '@mui/icons-material';

export const iconComponents = {AutoAwesome, Bloodtype, FamilyRestroom, LiveTv, MenuBook, MoodBad, Pool, StarPurple500, VolunteerActivism, LocalMovies, Reorder, Fort, };

export const TOP_LISTS = [
    {
      title: 'TOP 100 Popular Movies',
      icon: 'AutoAwesome',
      url: '/popular',
    },
    {
      title: 'TOP 250 Best Movies',
      icon: 'StarPurple500',
      url: '/best',
    },
    {
      title: 'Vampires',
      icon: 'Bloodtype',
      url: '/vampire',
    },
    {
      title: 'Comics',
      icon: 'MenuBook',
      url: '/comics',
    },
    { 
      title: 'Family',
      icon: 'FamilyRestroom',
      url: '/family',
    },
    {
      title: 'Romantics',
      icon: 'VolunteerActivism',
      url: '/romantic',
    },
    {
      title: 'Zombies',
      icon: 'MoodBad',
      url: '/zombie',
    },
    {
      title: 'Catastrophics',
      icon: 'Pool',
      url: '/catastrophe',
    },
    {
      title: 'Popular Series',
      icon: 'LiveTv',
      url: '/popular-series',
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