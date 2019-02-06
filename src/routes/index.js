import Vue from 'vue';
import VueRouter from 'vue-router';
import ListView from '../views/ListView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
        mode: 'history',
        routes: [
            { path: '/', redirect: 'news' },
            { path: '/:first(news|ask|jobs)', component: ListView,
                children: [
                    { path:':page([0-9]+)', component: ListView }
                ]
            },
            { path: '/item/:id([0-9]{8})', component: ItemView },
            { path: '/user/:id', component: UserView },

            { path: '*', component: NotFound }
        ],
});
