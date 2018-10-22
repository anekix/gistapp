<template>
    <div>
        <div class='gist__item'>
        <div>{{ gistData.gistUrl }}</div>
        <div>
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

export default {
  
  name: 'GistItem',
  props:['gistData'],
  components:{
    User
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

.gist__item
    padding-top 6px
    padding-left 6px
    padding-right 6px
    margin-bottom 20px
    width 400px
    box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
</style>
