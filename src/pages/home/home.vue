<template>
<div class="home">
    <Header></Header>  
    <Slider></Slider>
    <Category></Category>
    <Recommend></Recommend>  
</div>    
</template>

<script>
import Header from './components/header'
import Slider from './components/slider'
import Category from './components/category'
import Recommend from './components/recommend'
export default {
    name:'Home',
    components:{
        Header,
        Slider,
        Category,
        Recommend,
    }
}

</script>

<style lang="stylus" scoped>
    .home
        background-color:#f5f5f5
</style>