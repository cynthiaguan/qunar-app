<template>
    <div>
        <div class="my-group">
                <h2>周末去哪儿</h2>
        </div>
        <ul class="my-like-list">
            <li  v-for="(item,index) of recommendList" :key="index">
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
    data () {
        return {
            recommendList:[
                {imgUrl:"http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg",name:"漂流勇进，烧烤露营",desc:"轻松水上漂，任我乐逍遥"},
                {imgUrl:"http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg",name:"北京避暑胜地",desc:"到大自然中享受“天然空调”的清凉"},
                {imgUrl:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",name:"北京必游TOP10",desc:"来北京必去的景点非这些景点莫属"},
                {imgUrl:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",name:"寻找北京的皇城范儿",comnum:1295,price:24,desc:"数百年的宫廷庙宇，至今依旧威严霸气"},                
            ]
        }
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