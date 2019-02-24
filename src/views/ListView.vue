<template>
    <div>
        <ul class="item-list">
            <li v-for="item in fetchedData" :key="item.id" class="post">
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <div>
                    <p class="item-title">
                        <template v-if="item.domain">
                            <a :href="item.url" target="_blank">{{ item.title }}</a>
                        </template>
                        <template v-else>
                            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by 
                        <router-link :to="`/user/${item.user}`" v-if="item.user">{{ item.user }}</router-link> 
                        <a :href="item.url" target="_blank" v-else>{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
        <div v-if="page > 1">
            <button v-for="no in page" :key="no" @click="goPage(no)">{{ no }}</button>
            <!-- <router-link v-for="no in page" :key="no" :to="`/${name}/${no}`">{{ no }}</router-link> -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import bus from '../utils/bus.js';

export default {
    computed: {
        ...mapGetters(['fetchedData']),
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

        page: function () {
            const name = this.$route.params.first;
            let returnVal;
            if (name === 'news') {
                returnVal = 10;
            } else if (name === 'ask') {
                returnVal =  2;
            } else if (name === 'jobs') {
                returnVal =  1;
            }
            return returnVal;
        }
    },
    data() {
        return {
            name: this.$route.name,
        }
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
            const params = this.$route.params;

            let page = params.page?params.page:1;
            const name = params.first;

            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_LIST', {'first': name, 'page': page})
                    .then(() => {
                        // console.log('fetched');
                        bus.$emit('end:spinner');
                    })
                    .catch((error) => console.log(error));
            }, 1000);
        },
        goPage (page) {
            this.$router.push(`/${this.$route.params.first}/${page}`);
        }
    }
}
</script>

<style scoped>
.item-list {
    margin: 0;
    padding: 0;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.item-title {
    margin: 0;
}
.link-text, .link-text > a {
    color: #828282;
}
</style>