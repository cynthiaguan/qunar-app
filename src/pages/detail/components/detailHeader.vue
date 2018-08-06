<template>
    <div class="header">
        <div class="header-back" v-show="showHeader">
            <router-link  to="/" tag="span" class="iconfont">&#xe624;</router-link>
        </div>
        <div v-show="!showHeader" class="header-abs" :style="showOpacity">
            <router-link tag="div" to="/" class="header-left" >
                <span class="iconfont">&#xe624;</span>
            </router-link>
            <h1 class="header-mid">
                景点详情
            </h1>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Header',
        data () {
            return {
                showHeader:true,
                showOpacity:0
            }
        },
        methods:{
            handleScroll:function(){
                //console.log('scroll event needsss')
                const top = document.documentElement.scrollTop
                if( top > 60){
                    return this.showHeader = false
                }else{
                    return this.showHeader = true
                }
            }
        },
        activated: function () {
            window.addEventListener('scroll',this.handleScroll)
        },
        deactivated: function(){
            window.removeEventListener('scroll',this.handleScroll)
        }   // 对全局事件解绑        
    }
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
    .header
        display:flex
        height:0.86 rem
        color:#fff
        line-height:0.86 rem
        position:fixed
        top:0
        left:0
        right:0              
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
        .header-abs
            display:flex
            height:0.86 rem
            color:#fff
            line-height:0.86 rem
            background:$bgColor
            width:100%   
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
</style>