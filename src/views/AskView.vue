<template>
    <div>
        <ul>
            <li v-for="item in fetchedAsk" :key="item.id">
                <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                <small>
                    {{ item.time_ago }} by 
                    <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
                </small>
            </li>
        </ul>
        <div>
            <router-link v-for="no in 2" :key="no" :to="`/ask/${no}`">{{ no }}</router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['fetchedAsk'])
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
            this.$store.dispatch('FETCH_ASK', page);
        }
    }
}
</script>

<style>

</style>
