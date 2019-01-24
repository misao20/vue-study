<template>
    <ul>
        <li v-for="item in fetchedNews" :key="item.id">
            <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
            <small>
                {{ item.time_ago }} by 
                <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
        </li>
    </ul>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['fetchedNews'])
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
        this.$store.dispatch('FETCH_NEWS');
    },
}
</script>

<style>

</style>
