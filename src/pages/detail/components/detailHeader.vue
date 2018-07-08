<template>
    <div class="header">
        guanjianhua
    </div>
</template>
<script>
    export default{
        name:'DetailHeader',
    }
</script>
<style lang="stylus" scoped>
   .header
        .header-img-wrapper
            overflow:hidden
            width:100%
            height:0
            padding-bottom:55%
            position:relative
            background:#ccc
            .header-img
                width:100%
        .header-title
            position:absolute
            right:.2rem
            bottom:.3rem
            left:.2rem
            min-height:.4rem
            font-size:.36rem
            text-shadow:0 1px 2px rgba(0,0,0,0.7)
        .header-icon
            position:absolute
</style>