<template>
    <div class="city-page">
        <div class="city-header">
            <div class="city-header-left">
                <span class="iconfont">&#xe624;</span>
            </div>
            <h1 class="city-header-title">城市选择</h1>
        </div>
        <div class="city-container">
            <ul class="city-container-sub">
                <li class="city-inside">境内</li>
                <li class="city-outside">境外·港澳台</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:'CityHeader',
    }
</script>
<style lang="stylus" scoped>
    .city-page
        width:100%
        min-height:100%
        position:relative
        background:#f5f5f5
        .city-header
            height:.68rem
            line-height: .68rem
            background:#00bcd4
            .city-header-left
                position:absolute
                top:0
                left:0
                width:.8rem
                height:.88rem
                color:#fff
                font-size:.36rem
                text-align:center
            .city-header-title
                overflow:hidden
                margin: 0 1rem
                text-align:center
                color:#fff
                font-size:.32rem
        .city-container
            padding:.2rem 1rem
            height: .4rem
            line-height :.4rem
            background: #00bcd4
            overflow:hidden
            color:#fff
            .city-container-sub
                border:1px solid #fff
                overflow:hidden
                text-align:center
                .city-inside
                    float:left
                    font-size:.28rem
                    border-right:solid 1px #fff
                    width:50%
                    &:active
                        background :#fff
                .city-outside
                    &:active
                        background:#fff
</style>