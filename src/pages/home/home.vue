<template>
<div class="home">
    <Header></Header>  
    <Slider></Slider>
    <Category></Category>
    <Recommend></Recommend>
    <Weekend></Weekend>  
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
            console.log(res)
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