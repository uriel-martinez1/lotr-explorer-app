import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuoteView from '../views/QuoteView.vue'
import MovieView from '../views/MovieView.vue'
import CharacterView from '../views/CharacterView.vue'
import CharacterDetailView from '../views/CharacterDetailView.vue'
import MovieDetailView from '../views/MovieDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quote',
      name: 'quote',
      component: QuoteView
    },
    {
      path: '/movie',
      name: 'movie',
      component: MovieView
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/character/:characterId',
      name: 'characterDetailView',
      component: CharacterDetailView
    },
    {
      path: '/movie/:movieId',
      name: 'movieDetailView',
      component: MovieDetailView
    },
  ]
})

export default router
