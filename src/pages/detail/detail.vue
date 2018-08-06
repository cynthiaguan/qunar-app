<template>
    <div class="container">
        <Banner :bannerImg = "bannerImg" 
                :sightName = "sightName"
                :categoryList = "categoryList"
                :gallaryImgs = "gallaryImgs" >
        </Banner>
        <Header ></Header>
    </div>
</template>
<script>
    import Banner from './components/banner'
    import Header from './components/detailHeader'
    import axios from 'axios'
    export default{
        name:'Detail',
        components:{
            Banner,
            Header,
        },
        data () {
            return{
                bannerImg:"",
                categoryList:[],
                gallaryImgs:[],
                sightName:"",
            }
        },
        methods:{
            getDetailInfo () {
                axios.get('/api/detail.json')
                    .then(this.getDetailInfoSuccess)
            },
            getDetailInfoSuccess (res) {
                console.log('detail achieve')
                const data = res.data
                if(data.ret && data.data){
                    this.bannerImg = data.data.bannerImg
                    this.categoryList = data.data.categoryList
                    this.gallaryImgs = data.data.gallaryImgs
                    this.sightName = data.data.sightName
                    console.log(this.bannerImg,this.categoryList,this.gallaryImgs,this.sightName)
                }
            }
        },
        mounted () {
            this.getDetailInfo()
        }                
    }

</script>
<style lang="stylus" scoped>
   .container
        height:50rem
        overflow:scroll
</style>