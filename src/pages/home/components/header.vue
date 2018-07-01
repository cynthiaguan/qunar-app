<template>
    <div class="header">
        <div class="header-left "><span class="iconfont">&#xe624;</span></div>
        <div class="header-mid"><span class="iconfont">&#xe632;</span>输入城市/游玩主题/景点</div>
        <div class="header-right ">三亚<span class="iconfont">&#xe687;</span></div>       
    </div>    
</template>

<script>
export default {
    name:'Header',
}
</script>

<style  lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.header
    display:flex
    height:0.86 rem
    color:#fff
    line-height:0.86 rem
    background:$bgColor
    .header-left
        float:left
        width:0.64 rem
        text-align:center
    .header-mid
        flex:1
        background:#fff
        margin-top:0.15rem
        margin-bottom:0.15 rem
        border-radius: 0.1 rem
        padding-left:0.1 rem
        color:#ccc
        line-height:0.56 rem
    .header-right
        float:right
        width:1.24 rem
        text-align:center
</style>