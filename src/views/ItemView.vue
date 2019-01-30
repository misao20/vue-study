<template>
    <div>
        <section>
            <h2>{{ itemList.title }}</h2>
            <div class="user-container">
                <div><font-awesome-icon icon="user" /></div>
                <div class="user-description">
                    <router-link :to="`/user/${itemList.user}`">{{ itemList.user }}</router-link>
                    <div class="time">{{ itemList.time_ago }}</div>
                </div>
            </div>
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
.user-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>
