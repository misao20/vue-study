<template>
    <div>
        <list-item></list-item>
        <!-- <ul>
            <li v-for="job in fetchedJobs" :key="job.id">
                <a :href="job.url" target="_blank">{{ job.title }}</a>
                <small>{{ job.time_ago }} by {{ job.domain }}</small>
            </li>
        </ul> -->
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
    components: {
        ListItem
    },
    // created() {
    //     this.fetchData()
    // },
    // watch: {
    //     // 라우터 객체를 감시하고 있다가 fetchData() 함수를 호출한다
    //     '$route': 'fetchData'
    // },
    // methods: {
    //     fetchData() {
    //         let page = this.$route.params.page?this.$route.params.page:1;
    //         this.$store.dispatch('FETCH_JOBS', page);
    //     }
    // },
}
</script>
