<template>
    <div class="header" v-bind:class="{opacity:showOpacity}" @scroll="handleScroll">
        <div class="header-back">
            <span class="iconfont">&#xe624;</span>
        </div>
        <router-link tag="div" to="/" class="header-left "><span class="iconfont">&#xe624;</span></router-link>
        <h1 class="header-mid">
            金海湖风景区
        </h1>
    </div>
</template>
<script>
    export default{
        name:'Header',
        data () {
            return {
                showOpacity:0
            }
        },
        methods:{
            handleScroll:function(){
                console.log('122')
                return this.showOpacity = ( scrollHeight / 200) < 1 ? scrollHeight / 200 : 1
            }
        }    
    }
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
    .header
        display:flex
        height:0.86 rem
        color:#fff
        line-height:0.86 rem
        background:#00bcd4
        position:fixed
        top:0
        left:0
        right:0
        .header-left
            float:left
            width: 1 rem
            text-align:center
            color: #fff                    
        .header-mid
            flex:1
            text-align:center
            font-size:.32 rem
            margin-right:1 rem               
        .header-back
            position: absolute
            left: .1rem
            top: .1rem
            width: .72rem
            height: .72rem
            line-height:.72rem
            background-color: #194370
            border-radius:50%
            color:white
            text-align:center       
</style>