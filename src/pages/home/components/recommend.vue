<template>
    <div class="wrapper">
        <div class="my-group">
            <img class="my-group-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
            <span class="my-title">猜你喜欢</span>
        </div>
        <ul class="my-like-list">
            <router-link tag="li"  class="my-like-item border-bottom" v-for="(item,index) of recomList" :key="index" :to="'/detail/'+item.id">
                <a>
                   <div class="my-like-imgcon">
                        <img class="mp-like-img" :src="item.imgUrl" alt="金海湖风景区">
                   </div>
                   <div class="my-like-tag">随买随用</div>
                    <div class="my-like-info">
                        <div class="my-like-title">{{item.name}}</div>
                        <div class="my-like-comment">
                            <span class="iconfont my-like-font">&#xe629;&#xe629;&#xe629;&#xe629;&#xe629;</span>
                            <span class="my-like-comnum">{{item.comnum}}条评论</span>
                        </div>
                        <div class="my-like-price">
                            <span class="my-hot-price">￥<em class="my-price-num">{{item.price}}</em></span>
                            起
                            <span class="my-like-address">{{item.district}}</span>
                        </div>
                    </div>                     
                </a>     
            </router-link>
        </ul>
        <a href="#" class="my-like-more">查看所有产品</a>
    </div>
</template>
<script>
export default{
    name:"Recommend",
    props:{
        recomList:Array
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
@import '~styles/variable.styl'
.wrapper
    margin-top: .2 rem
    width:100%
    background:#fff
    position:relative
    overflow: hidden
    .my-group
        position:relative
        overflow: hidden
        padding:.24rem 0 .26rem
        .my-group-img
           display:inline-block
           vertical-align:top
           width: .3rem
           height: .3rem
           margin-left: .2rem
        .my-title
           font-size:0.32 rem
           line-height:.44 rem
           color: #212121 
           margin-left: .08rem
           display:inline-block
           height: .44rem
    .my-like-list
        margin-left: .24rem
        list-style:none
        position:relative
        overflow: hidden
        .my-like-item
           position:relative
           padding: .2rem 0
           overflow:hidden
           .my-like-imgcon
                overflow:hidden          
                width: 2rem
                height: 2rem
                float:left
                .my-like-img
                    width: 100%
           .my-like-tag
                position:absolute 
                top: .2rem
                left: 0
                width: 1.02rem
                height: .38rem
                color: #fff;
                font-size: .2rem
                line-height: .38rem
                text-indent: .04rem
                background-size:100%
                background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)
           .my-like-info
                padding-left:.22rem
                overflow:hidden
                display:block
                .my-like-title
                    margin-top:.26rem
                    height:.44rem
                    color:#212121
                    font-size:.32rem
                    line-height:.44rem
                    overflow:hidden
                    min-width:0
                    ellipisis()
                .my-like-comment
                    margin-top:.14 rem
                    height:.34rem
                    .my-like-font
                        color:$myLikeFontColor
                        font-size:.2rem
                    .my-like-comnum
                        color:$myLikeComnum
                        font-size:.28rem
                        vertical-align:text-bottom
                        margin-left:.08rem
                .my-like-price
                        margin-top:.22rem
                        color:$myLikeComnum
                        font-size:.24rem
                        line-height:.4rem
                        color:$myLikeComnum
                        position:relative
                        overflow:hidden
                        .my-hot-price
                             color: $myHotPrice
                             .my-price-num
                                font-size: .4rem
                        .my-like-address
                            position: absolute
                            right: .24rem
                            bottom: 0
    .my-like-more
        display:inline-block
        width:100%
        text-decoration:none
        font-size:.28 rem
        line-height:.4rem
        color:$myLikeMore
        text-align:center
        padding: .2rem 0
    </style>