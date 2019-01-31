<template>
    <div>
        <section>
            <h2>{{ itemList.title }}</h2>
            <!-- <user-profile :info="itemList"> -->
            <user-profile>
                <div slot="username"><router-link :to="`/user/${itemList.user}`">{{ itemList.user }}</router-link></div>
                <template slot="time">{{ 'Posted ' + itemList.time_ago }}</template>
            </user-profile>
            <div v-html="itemList.content"></div>
        </section>

        <section>
            <h3>Comment [{{ itemList.comments_count }}]</h3>
            <comment-vue :propsdata="itemList.comments"></comment-vue>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CommentVue from './Comment.vue';
import UserProfile from '../components/UserProfile.vue';

export default {
    components: {
        UserProfile,
        CommentVue
    },
    computed: {
        ...mapGetters({
            itemList: 'fetchedItem'
        })
    },
    created() {
        this.$store.dispatch('FETCH_ITEM', this.$route.params.id)
    },
}
</script>

<style>
</style>
