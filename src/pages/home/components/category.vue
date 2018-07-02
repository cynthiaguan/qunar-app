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
    props:{
        iconList:Array
    },
    data () {
         return {
            swiperOption:{
                pagination:'.swiper-pagination'               
            }
        }
     },
   computed: {
        pages: function () {
                const pages = []
                this.iconList.forEach((item,index) => {
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

