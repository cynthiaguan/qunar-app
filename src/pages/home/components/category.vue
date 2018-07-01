<template>
    <div class="icons">
         <swiper :options="swiperOption">
            <swiper-slide  v-for = "(page,index) of pages" :key="index">
                <div class="icon" v-for='item of page'>
                        <div class="img-content" :key="item.id">
                                <img :src="item.imgUrl" :alt="item.desc" style="opacity: 1;" class="img-self">
                        </div>
                        <p class="img-text">{{item.desc}}</p>
               </div> 
            </swiper-slide>     
            <div class="swiper-pagination " slot="pagination"></div>                                                             
        </swiper>           
    </div>      
</template>
<script>
export default {
    name:'Category',
    data () {
         return   {
            categoryList: [
                {id:'00001',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',desc:'热门景点'},
                {id:'00003',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',desc:'必游榜单'},
                {id:'00004',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',desc:'夏日玩水'},
                {id:'00005',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',desc:'一日游'},
                {id:'00006',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',desc:'动植物园'},
                {id:'00007',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',desc:'故宫'},
                {id:'00008',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',desc:'主题乐园'},
                {id:'00009',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',desc:'Q+精选'},
                {id:'00006',imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',desc:'动植物园'},                              
            ],
            swiperOption:{
                pagination:'.swiper-pagination'               
            },
        }
     },
   computed: {
        pages: function () {
                const pages = [ ]
                this.categoryList.forEach((item,index) => {
                    const page = Math.floor(index  /  8)
                    
                    if(! pages[page]) {
                        pages[page] = []
                    }
                     pages[page].push(item)
                })                      
                return pages
        }
    }              
}
</script>
<style lang="stylus" scoped>
        .icons >>> .swiper-container
            width:100%
            height:0
            padding-bottom:58%    
        .icons
            clear:both
            background:#fff
         .icon
            width:25%
            height:0
            padding-bottom: 25%
            position:relative
            float:left
            .img-content
                position:absolute
                left:0
                right:0 
                top:0
                bottom:.44 rem
                padding: .1 rem        
                .img-self
                    display:block
                    margin:0 auto
                    height:100%
            .img-text   
                position:absolute
                left:0
                right:0 
                bottom:0
                height: .44 rem
                line-height: .44 rem 
                display:inline
                text-align:center

</style>

