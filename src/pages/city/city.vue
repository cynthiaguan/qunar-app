<template>
    <div class="city">
        <city-header></city-header>
        <hot-city></hot-city>
        <city-letter></city-letter>
    </div>
</template>
<script>
    import CityHeader from "./components/cityHeader"
    import HotCity from "./components/cityList_CN"
    import CityLetter from "./components/cityList_EN"
    export default{
        name:'City',
        components:{
            HotCity,
            CityHeader,
            CityLetter
        }
    }
</script>
<style lang="stylus" scoped>
    .city
        background-color:#f5f5f5
</style>