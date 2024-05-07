// import { create } from 'core-js/core/object';
import BookDetails from './components/BookDetails.vue';
import BooksPage from './components/BooksPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        title: 'BookDetails',
        component: BookDetails,
        path: '/'
    },
    {
        title: 'BooksPage',
        component: BooksPage,
        path: '/BooksPage'
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;