<template>
    <router-link tag="div" to="/" class="header" >
            <div class="header-back">
               <span class="iconfont">&#xe624;</span>
            </div>          
    </router-link>
</template>
<script>
    export default{
        name:'Header',    
    }
</script>
<style lang="stylus" scoped>
        .header-back
            position: absolute
            left: .1rem
            top: .1rem
            width: .72rem
            height: .72rem
            line-height:.72rem
            background-color: #194370
            border-radius:50%
            color:white
            text-align:center       
</style>