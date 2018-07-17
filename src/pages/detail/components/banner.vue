<template>
    <div class="header" >
        <div @click="handleClick">
            <div class="header-img-wrapper">
                <img class="header-img" src="//img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg" alt="金海湖风景区">
            </div>
            <div class="header-title">
                金海湖风景区(AAAA景区)
            </div>
            <div class="header-icon">
               <span class="iconfont">&#xeb26;</span>
               <em class="mp-imgswipeicon-number">15</em>
            </div>
        </div>    
        <Gallery v-show="showGallery" @close="handleGalleryClose"></Gallery>
    </div>
</template>
<script>
    import Gallery from '../../common/gallery/gallery'
    export default{
        name:'Banner',
        components:{
            Gallery
        },
        data () {
            return {showGallery:false}
        },
        methods:{
            handleGalleryClose:function($event){
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
            line-height: .4rem;
            text-align: center;
            color:#fff
            border-radius: .2rem;
</style>