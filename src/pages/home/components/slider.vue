<template>
    <div class="wrapper">
          <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiperList">
            <!-- slides -->
            <swiper-slide v-for="slider of swiperList" :key="slider.id">
                <img class="swipe-img" :src="slider.imgUrl" alt="去哪儿门票" style="opacity: 1;">
            </swiper-slide>      
            <div class="swiper-pagination swiper-pagination-red" slot="pagination"></div>
          </swiper>
    </div>
</template>

<script>

export default {
    name: 'Slider',
    props:{
        swiperList:Array
    },
    data: function(){
        return {
            swiperOption:{
                loop:true,
                autoplay:5000,
                pagination:'.swiper-pagination'
            },
        }
    },
    computed:{
        showSwiperList: function(){
            return this.swiperList.length
        }
    }
 }
</script>

<style  lang="stylus" scoped>
    @import "~styles/variable"
        .wrapper >>>  .swiper-pagination-bullet-active
            background:#fff !important
        .wrapper
            width:100%
            height: 0
            padding-bottom:26.7%
            overflow:hidden
            float:left
            background:$sliderColor
            .swipe-img
                width:100%
</style>