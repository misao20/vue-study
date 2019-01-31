<template>
    <div>
        <!-- <user-profile :info="userInfo"> -->
        <user-profile>
            <div slot="username">{{ userInfo.id }}</div>
            <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
            <span slot="karma">{{ userInfo.karma }}</span>
        </user-profile>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    components: {
        UserProfile,
    },
    computed: {
        ...mapGetters({
            userInfo: 'fetchedUser',
        }),
    },
    created() {
        this.$store.dispatch('FETCH_USER', this.$route.params.id);
    },
}
</script>

<style>

</style>
