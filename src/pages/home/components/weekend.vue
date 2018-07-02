<template>
    <div>
        <div class="my-group">
                <h2>周末去哪儿</h2>
        </div>
        <ul class="my-like-list">
            <li  v-for="(item,index) of weekendList" :key="index">
                <a href="#" title="link" class="my-full-link">
                   <div class="my-like-imgcon">
                        <img  :src="item.imgUrl" alt="">
                   </div>
                   <div class="my-product-info">
                        <p class="product-name">{{item.name}}</p>
                        <p class="product-desc">{{item.desc}}</p>
                   </div>                
                </a>     
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:"Weekend",
    props:{
        weekendList:Array
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
@import '~styles/variable.styl'
    .my-group
        height:.8rem
        padding-left:.26rem
        line-height:.8rem
        color:#212121
    .my-like-list
        list-style:none
        position:relative
        overflow: hidden
        .my-full-link
            display:inline-block
            width:100%
            height:100%
            .my-like-imgcon
                overflow:hidden
                height:0
                width:100%
                padding-bottom:37.4375%
            .my-product-info
                position:relative
                padding:.14rem .2rem .2rem .2rem
                .product-name
                    overflow:hidden
                    padding-right:1.4 rem
                    color:#212121
                    font-size:.28rem
                    line-height:.48rem
                    ellipisis()
                .product-desc
                    padding-right:.1.4 rem
                    overflow:hidden
                    color:#616161
                    font-size:.24rem
                    ellipisis()
</style>