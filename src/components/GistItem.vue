<template>
    <div>
        <div class='gist__item'>
        <div class="gits__url">{{ gistData.gistUrl }}</div>
        <div class="tag__wrapper">
            <Tag v-for="tag in gistData.tags" :tag-value="tag" class="file__tag" />

        </div>
        <div class="avatar__container">
            <User
                class="avatar__item"
                v-for="item in  gistData.forkInfo"
                :user-avatar-url="item.avatarUrl" 
                :user-name="item.name"
                :user-fork-link="item.forkUrl"
            />
        </div>
        </div>
    </div>
</template>

<script>

import User from '@/components/User'
import Tag from '@/components/Tag'
export default {
  
  name: 'GistItem',
  props:['gistData'],
  components:{
    User,
    Tag
  }

}

</script>

<style lang="stylus" scoped>

.avatar__container
    padding-top 10px
    display flex
    flex-direction row
    //background-color red
    justify-content center
.avatar__item
    margin-right 8px

.file__tag
    margin-right 4px
    margin-top 2px
    display inline-block
.tag__wrapper
    margin-top 10px
    margin-bottom 10px
.gits__url
    color grey
.gist__item
    padding-top 20px
    padding-bottom 20px
    padding-left 20px
    padding-right 20px
    margin-bottom 20px
    width 400px
    box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
</style>
