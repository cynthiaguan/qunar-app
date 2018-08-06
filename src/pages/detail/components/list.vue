<template>
    <div>
        <div class="ticket" v-for="(item,index) of categoryList">
            <h3 class="ticket-title" :key="index">
                <span class="ticket-title-header"></span>
                {{item.title}}
            </h3>
            <div v-if="item.children">
                <List :categoryList = "item.children"></List>
            </div>
        </div>         
    </div>
</template>
<script>
    export default{
        name:'List',
        props:{
            categoryList:Array
        }
    }
</script>
<style lang="stylus" scoped>
    .ticket
        overflow:hidden
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