<template>
    <ul>
        <li v-for="comment in propsdata" :key="comment.id">
            <p v-html="comment.content"></p>            
            <small>
                {{ comment.time_ago }} by 
                <router-link :to="`/user/${comment.user}`">{{ comment.user }}</router-link>                
            </small>
            <comments v-if="comment.comments.length > 0" :propsdata="comment.comments"></comments>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'comments',
    props: ['propsdata'] 
}
</script>

<style>

</style>
