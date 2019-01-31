import Vue from 'vue';
import VueRouter from 'vue-router';
// import NewsView from '../views/NewsView.vue';
// import JobsView from '../views/JobsView.vue';
// import AskView from '../views/AskView.vue';
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
                    { path:':page(1|2)', component: ListView }
                ]
            },
            // { path: '/news', name: 'news', component: NewsView,
            //     children: [
            //         { path:':page(10|[0-9])', name: 'news', component: NewsView }
            //     ]
            // },
            // { path: '/jobs', name: 'jobs', component: JobsView },
            // { path: '/ask', name: 'ask', component: AskView,
            //     children: [
            //         { path:':page(1|2)', name: 'ask', component: AskView }
            //     ]
            // },
            { path: '/item/:id([0-9]{8})', component: ItemView },
            { path: '/user/:id', component: UserView },

            { path: '*', component: NotFound }
        ],
});
