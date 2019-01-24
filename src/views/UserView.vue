<template>
    <ul>
        <li>{{ userInfo.id }}</li>
        <li>{{ userInfo.karma }}</li>
        <!-- <li>{{ userInfo.about }}</li> -->
        <li v-html="userInfo.about"></li>
        <li>{{ userInfo.created }}</li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            userInfo: 'fetchedUser',
        }),
    },
    created() {
        this.$store.dispatch('FETCH_USER', this.$route.params.id);
    }
}
</script>

<style>

</style>
