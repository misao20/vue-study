<template>
    <div>
        <ul>
            <li v-for="item in fetchedNews" :key="item.id">
                <a :href="item.url" target="_blank">{{ item.title }}</a>
                <small>
                    {{ item.time_ago }} by 
                    <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
                </small>
            </li>
        </ul>
        <div>
            <router-link v-for="no in 10" :key="no" :to="`/news/${no}`">{{ no }}</router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['fetchedNews']),
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
            this.$store.dispatch('FETCH_NEWS', page);
        }
    }
}
</script>

<style>
</style>
