<template>
    <div>
        <ul class="item-list">
            <li v-for="item in fetchedData" :key="item.id" class="post">
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <div>
                    <p class="item-title">
                        <template v-if="item.domain">
                            <a :href="item.url" target="_blank">{{ item.title }}</a>
                        </template>
                        <template v-else>
                            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by 
                        <router-link :to="`/user/${item.user}`" v-if="item.user">{{ item.user }}</router-link> 
                        <a :href="item.url" target="_blank" v-else>{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
        <div v-if="page > 1">
            <router-link v-for="no in page" :key="no" :to="`/${name}/${no}`">{{ no }}</router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import bus from '../utils/bus.js';

export default {
    computed: {
        ...mapGetters(['fetchedData']),
        // ...mapGetters({
        //     items: 'fetchedNews'
        // })

        // 2.
        // ...mapState({
        //     news: state => state.news,
        // })

        // 1.
        // news() {
        //     return this.$store.state.news;
        // }

        page: function () {
            const name = this.$route.name;
            if (name === 'news') {
                return 10;
            } else if (name === 'ask') {
                return 2;
            } else if (name === 'jobs') {
                return 1;
            }
        }
    },
    data() {
        return {
            name: this.$route.name,
        }
    },
    created() {
        this.fetchData()
    },
    watch: {
        // 라우터 객체를 감시하고 있다가 fetchData() 함수를 호출한다
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            let page = this.$route.params.page?this.$route.params.page:1;
            const name = this.$route.name;
            let dispatchName;
            if (name === 'news') {
                dispatchName = 'FETCH_NEWS';
            } else if (name === 'ask') {
                dispatchName = 'FETCH_ASK';
            } else if (name === 'jobs') {
                dispatchName = 'FETCH_JOBS';
            }
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch(dispatchName, page)
                    .then(() => {
                        console.log('fetched');
                        bus.$emit('end:spinner');
                    })
                    .catch((error) => console.log(error));
            }, 2000);
        },
    }
}
</script>

<style scoped>
.item-list {
    margin: 0;
    padding: 0;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.item-title {
    margin: 0;
}
.link-text, .link-text > a {
    color: #828282;
}
</style>