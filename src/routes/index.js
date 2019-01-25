import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
        mode: 'history',
        routes: [
            { path: '/', redirect: 'news' },
            { path: '/news', component: NewsView,
                children: [
                    { path:':page(10|[0-9])', component: NewsView }
                ]
            },
            { path: '/jobs', component: JobsView },
            { path: '/ask', component: AskView,
                children: [
                    { path:':page(1|2)', component: AskView }
                ]
            },
            { path: '/item/:id([0-9]{8})', component: ItemView },
            { path: '/user/:id', component: UserView },

            { path: '*', component: NotFound }
        ],
});
