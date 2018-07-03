<template>
    <div>
        <h2 class="city-title">字母排序</h2>
        <ul class="city-container">
            <li class="city-list" v-for="item in hotCityList">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"CityLetter",
        data () {
            return {
                hotCityList:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .city-title
        margin:.24rem .3rem
        font-size:.24rem
    .city-container
        list-style:none
        background:#fff
        display:flex
        flex-wrap:wrap
        .city-list
            width:16.6667%
            text-align:center
            height: .9rem
            line-height:.9rem
            font-size:.28rem
</style>