<template>
    <div>
        <div class='gist__item'>
            {{url}}
        </div>
    </div>
</template>

<script>


export default {
  
  name: 'GistItem',
  props:['url']

}

</script>

<style lang="stylus" scoped>
.gist__item
    width 400px
    height 60px
    background-color red
</style>
