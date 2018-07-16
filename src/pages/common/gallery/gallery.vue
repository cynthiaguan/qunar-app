<template>
	<div class="container">
		<div class="image-wrapper" @click="handleClick">
			 <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiperList" class="image-slider">
	            <!-- slides -->
		            <swiper-slide v-for="slider of swiperList" :key="slider.id">
		                <img class="swipe-img" :src="slider.imgUrl" alt="去哪儿门票" style="opacity: 1;">
		            </swiper-slide>      
	            	<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
	          </swiper>
		</div>
	</div>
</template>
<script>
	export default {
		name:"Gallery",
		data:function(){
			return{
				swiperList:[
					{id:"0001",imgUrl:"http://img1.qunarzz.com/sight/p0/1609/d3/d3d5e1066193621ca3.water.jpg_r_800x800_634d475c.jpg"},
					{id:"0002",imgUrl:"http://img1.qunarzz.com/sight/p0/1606/82/822916df9159942cb4.water.jpg_r_800x800_8c86e29b.jpg"},
					{id:"0003",imgUrl:"http://img1.qunarzz.com/sight/p0/1606/43/43ebc66fb9f8df3cb4.water.jpg_r_800x800_f90d5c98.jpg"}
				],
				swiperOption:{
	                loop:true,
	                autoplay:2000,
	                pagination:'.swiper-pagination',
	                paginationType : 'fraction',
	            },
			}
		},
	    computed:{
	        showSwiperList: function(){
	            return this.swiperList.length
	        }
	    },
	    methods:{
	    	handleClick:function(){
	    		$.event.emit('close')
	    	}
	    }		
	}	
</script>
<style lang="stylus" scoped>
	.container >>> .swiper-container 
		overflow:inherit
	.container
		display:flex
		background:black
		color:red
		flex-drection:column
		align-items:center
		justify-content:center
		position:fixed
		left:0
		right:0
		top:0
		bottom:0
		.image-wrapper
			width:100%
			.image-slider
				width:100%
				height:0
				padding-bottom:75%
				.swipe-img
					width:100%
				.swiper-pagination-white
					color:#fff	
					bottom: -3 rem		
					
				
</style>