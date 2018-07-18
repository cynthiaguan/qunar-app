<template>
    <div class="city">
        <Banner></Banner>
        <Header></Header>
    </div>
</template>
<script>
    import Banner from './components/banner'
    import Header from './components/detailHeader'
    export default{
        name:'Detail',
        components:{
            Banner,
            Header,
        }
    }

</script>
<style lang="stylus" scoped>
   
</style>