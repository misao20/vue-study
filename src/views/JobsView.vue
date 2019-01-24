<template>
    <ul>
        <li v-for="job in fetchedJobs" :key="job.id">
            <a :href="job.url" target="_blank">{{ job.title }}</a>
            <small>{{ job.time_ago }} by {{ job.domain }}</small>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['fetchedJobs'])
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
    },
}
</script>

<style>

</style>
