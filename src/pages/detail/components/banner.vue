<template>
    <div>
        <div class="header" >
            <div @click="handleClick">              
                <div class="header-img-wrapper">
                    <img class="header-img" :src="bannerImg" alt="">
                </div>
                <div class="header-title">
                    {{this.sightName}}
                </div>
                <div class="header-icon">
                   <span class="iconfont">&#xeb26;</span>
                   <em class="mp-imgswipeicon-number">15</em>
                </div> 
                <List :categoryList = "categoryList"></List>                       
            </div>   
            <Fade>
                <Gallery v-show="showGallery" 
                        @close="handleGalleryClose"
                        :swiperList="gallaryImgs">
                </Gallery>
            </Fade>
        </div>
    </div>
</template>
<script>
    import Gallery from '../../common/gallery/gallery'
    import Fade from '../../common/animation/fade'
    import List from './list'
    export default{
        name:'Banner',
        components:{
            Gallery,
            Fade,
            List
        },
        props:{
            bannerImg:String,
            categoryList:Array,
            gallaryImgs:Array,
            sightName:String,
        },
        data () {
            return {
                showGallery:false,
            }
        },
        methods:{
            handleGalleryClose:function(event){
                return this.showGallery= false
            },
            handleClick:function(event){
                return this.showGallery = true
            },            
        }      
    }
</script>
<style lang="stylus" scoped>
   .header
        position:relative
        .header-img-wrapper
            overflow:hidden
            width:100%
            height:0
            padding-bottom:55%
            position:relative
            background:#ccc
            .header-img
                width:100%
        .header-title
            position:absolute
            right:.2rem
            bottom:.3rem
            left:.2rem
            color:#fff
            min-height:.4rem
            font-size:.36rem
            text-shadow:0 1px 2px rgba(0,0,0,0.7)
        .header-icon
            position:absolute
            left: .2rem
            bottom: .86rem
            background: rgba(0,0,0,.5)
            width: 1.2rem
            height: .4rem
            line-height: .4rem
            text-align: center
            color:#fff
            border-radius: .2rem
        .header-back
            position: absolute
            left: .1rem
            top: .1rem
            width: .72rem
            height: .72rem
            line-height:.72rem
            border-radius:50%
            color:white
            text-align:center
    .ticket
        overflow:hidden
        width:100%
        height:0
        padding-bottom:55%
        margin-bottom: .2rem
        position:realtive
        .ticket-title
            overflow: hidden
            position: relative
            z-index: 4
            margin-bottom: -.02rem
            padding: 0 .2rem
            height: .88rem
            background: #fff
            color: #333
            font-size: .32rem
            line-height: .88rem
            text-indent: .4rem 
            padding: .2rem .2rem
            .ticket-title-header
                display: inline-block;
                vertical-align:middle
                width:.36rem
                height:.34rem
                background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.49rem no-repeat;
                margin-right: .02rem;
                background-size: .4rem 3rem;                          
</style>