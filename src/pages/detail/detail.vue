<template>
    <div class="container">
        <Banner :detailList="detailList"></Banner>
        <Header></Header>
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
                detailList:[]
            }
        },
        methods:{
            getDetailInfo(){
                axios.get('/api/detail.json')
                    .then(this.getDetailInfoSuccess)
            },
            getDetailInfoSuccess(res){
            console.log('detail achieve')
                const data = res.data
                if(data.ret && data.detailList){
                    this.detailList = data.detailList
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