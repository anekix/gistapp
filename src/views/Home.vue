<template>
  <div class="home">
    <div v-for="i in 6">

    </div>
       <search dispatchMethod='fetchUserGists' />
       <div v-for="item in gistData">
         <!--{{i.html_url}}-->
         <GistItem :gist-data="item" />
       </div>
<!--       <div v-for="i in forks">{{i}}</div>
 -->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import search from '@/components/search.vue';
import GistItem from '@/components/GistItem'
import {getGistForks} from '@/services/forks'

import userAvatar from '@/components/avatar'


export default {
  name: 'home',
  components: {
    HelloWorld,
    search,
    GistItem,
    userAvatar
  },
  data: function(){
    return {
      gistData:[
        {
          gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
          forkInfo:[

          {
            avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
            name: '@anekix',
            forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4",
          
        },

        {

          avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
          name: '@anekix',
          forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
        },        

        {
          gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
          avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
          name: '@anekix',
          forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
        },       
      ]
    },

            {
          gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
          forkInfo:[

          {
            avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
            name: '@anekix',
            forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4",
          
        },

        {

          avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
          name: '@anekix',
          forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
        },        

        {
          gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
          avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
          name: '@anekix',
          forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
        },       
      ]
    },

      {
          gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
          forkInfo:[

          {
            avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
            name: '@anekix',
            forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4",
          
        },

        {

          avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
          name: '@anekix',
          forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
        },        

        {
          gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
          avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
          name: '@anekix',
          forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
        },       
      ]
    }
  ]
}},
  computed:{
    gists(){
      // return this.$store.state.gists
        return [
          {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
          {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
          {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
          {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
          {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
          {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
          {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},


        ]
    },
    forks(){
      
      // var gists = self.$store.state.gists;
      var gists = [
          {
            html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
            id:"95ecc104bc05ede915492367d2d72cb3"
          },
        //  {
        //     html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
        //     id:"95ecc104bc05ede915492367d2d72cb3"
        //   },         {
        //     html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
        //     id:"95ecc104bc05ede915492367d2d72cb3"
        //   },         {
        //     html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
        //     id:"95ecc104bc05ede915492367d2d72cb3"
        //   },         {
        //     html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
        //     id:"95ecc104bc05ede915492367d2d72cb3"
        //   },         {
        //     html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
        //     id:"95ecc104bc05ede915492367d2d72cb3"
        //   },         {
        //     html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
        //     id:"95ecc104bc05ede915492367d2d72cb3"
        //   },
        ]
      this.profilePics = {}
      gists.forEach(el => {
      
      if(el.id == "95ecc104bc05ede915492367d2d72cb3"){
        getGistForks(el.id).then(response => {
            this.profilePics[el.id] = []
            let ar= []
            response.data.forEach(fork => {
              ar.push(fork.id)
            })
            this.$set(this.profilePics, el.id, ar)
            this.$forceUpdate()

            })
      }

      })
      return {
          '95ecc104bc05ede915492367d2d72cb3': [
            { 
                "avatar_url": "https://avatars3.githubusercontent.com/u/10773612?v=4",
                "url": "https://api.github.com/users/aayush06",
          },
          { 
                "avatar_url": "https://avatars3.githubusercontent.com/u/10773612?v=4",
                "url": "https://api.github.com/users/aayush06",
          },
         { 
                "avatar_url": "https://avatars3.githubusercontent.com/u/10773612?v=4",
                "url": "https://api.github.com/users/aayush06",
          }
          ]
        
      
    
  
}



  }

  }
}
</script>
