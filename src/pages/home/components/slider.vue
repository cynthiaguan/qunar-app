<template>
    <div class="wrapper">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg" alt="去哪儿门票" style="opacity: 1;">
            </swiper-slide>
            <swiper-slide>
                    <img class="swipe-img" src="http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg" alt="去哪儿门票" style="opacity: 1;">
            </swiper-slide>
            <swiper-slide>
                   <img class='swipe-img' src='http://img1.qunarzz.com/piao/fusion/1806/56/d939255eab633a02.jpg_750x200_c08a2c07.jpg' alt='去哪儿门票' />
            </swiper-slide>       
            <div class="swiper-pagination swiper-pagination-red" slot="pagination"></div>
          </swiper>
    </div>
</template>

<script>

export default {
    name: 'Slider',
    data: function(){
        return {
            swiperOption:{
                loop:true,
                autoplay:5000,
                pagination:'.swiper-pagination'
            },
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