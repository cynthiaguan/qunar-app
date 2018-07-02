<template>
<div class="home">
    <Header></Header>  
    <Slider :swiperList="swiperList"></Slider>
    <Category :iconList="iconList"></Category>
    <Recommend :recomList="recomList"></Recommend>
    <Weekend :weekendList="weekendList"></Weekend>  
</div>    
</template>

<script>
import Header from './components/header'
import Slider from './components/slider'
import Category from './components/category'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
import axios from 'axios'
export default {
    name:'Home',
    data () {
        return {
            weekendList:[],
            swiperList:[],
            recomList:[],
            iconList:[],
        }
    },
    components:{
        Header,
        Slider,
        Category,
        Recommend,
        Weekend,
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json')
                .then(this.getHomeInfoSuccess)
        },
        getHomeInfoSuccess(res){
            const data = res.data
            if(data.ret && data.data){
                this.weekendList = data.data.weekendList
                this.swiperList = data.data.swiperList
                this.recomList = data.data.recommendList
                this.iconList = data.data.iconList
            }
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}

</script>

<style lang="stylus" scoped>
    .home
        background-color:#f5f5f5
</style>