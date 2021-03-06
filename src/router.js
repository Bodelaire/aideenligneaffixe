import Vue from 'vue'
import Router from 'vue-router'
import Categorie from './components/Categorie/Categorie.vue'
import CategorieSel from './components/Categorie/CategorieSel.vue'
import Article from './components/Article/Article.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/categorie'
    },
    {
      path: '/categorie',
      component: Categorie,
      name: 'categorie'
    },
    {
      path: '/article/:id',
      component: Article,
      name: 'article'
    },
    {
      path: '/categorie/:id',
      component: CategorieSel,
      name: 'categorieSel'
    }
  ]
})
