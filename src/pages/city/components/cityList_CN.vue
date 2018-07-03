<template>
    <div>
        <h2 class="city-title">热门城市</h2>
        <ul class="city-container">
            <li class="city-list" v-for="item in hotCityList">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default{
    name:"HotCity",
    data () {
        return {
            hotCityList:['北京','上海','三亚','香港','杭州','广州','成都','深圳','苏州','桂林','西安','厦门']
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
            width:33.3333333333333%
            border-right:.02px solid #ddd
            border-top:.02rem solid #ddd
            text-align:center
            box-sizing:border-box
            height: .9rem
            line-height:.9rem
            font-size:.28rem
        .city-list:nth-child(-n+3)
            border-top:0
        .city-list:nth-child(3n+3)
            border-right:0

</style>