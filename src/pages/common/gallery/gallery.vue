<template>
	<div class="container" @click="handleClose">
		<div class="image-wrapper">
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
		props:{
			swiperList:Array
		},
		data:function(){
			return{
				swiperOption:{
	                loop:true,
	                autoplay:3000,
	                pagination:'.swiper-pagination',
	                paginationType : 'fraction',
	                observer:true,
    				observeParents:true,
	            },
			}
		},
	    computed:{
	        showSwiperList: function(){
	            return this.swiperList.length
	        }
	    },
	    methods:{
	    	handleClose:function(){
	    		this.$emit('close',false)
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