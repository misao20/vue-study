<template>
    <div>
        <h2>{{ itemList.title }}</h2>
        <small>
            {{ itemList.time_ago }} by
            <router-link :to="`/user/${itemList.user}`">{{ itemList.user }}</router-link>
        </small>
        <p v-html="itemList.content"></p>

        <h3>Comment [{{ itemList.comments_count }}]</h3>
        <comment-vue :propsdata="itemList.comments"></comment-vue>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CommentVue from './Comment.vue';

export default {
    computed: {
        ...mapGetters({
            itemList: 'fetchedItem'
        })
    },
    created() {
        this.$store.dispatch('FETCH_ITEM', this.$route.params.id)
    },
    components: {
        'comment-vue': CommentVue
    }
}
</script>

<style>

</style>
