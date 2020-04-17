
import SearchPage from '../pages/search.vue';
import RandomPage from '../pages/random.vue';
import FavouritesPage from '../pages/favourites.vue';



var routes = [
  {
    path: '/search',
    component: SearchPage,
  },
  
  {
    path: '/random/',
    component: RandomPage,
  },
  
  {
    path: '/favourites/',
    component: FavouritesPage,
  },

  
];

export default routes;
