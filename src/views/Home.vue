<template>
  <div class="home">
    <div>
      {{gistData}}

    </div>
       <search dispatchMethod='fetchUserGists' v-on:childToParent="onDataRecieved"/>
       <div v-for="item in gistData">
         <GistItem :gist-data="item" />
       </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import search from '@/components/search.vue';
import GistItem from '@/components/GistItem'
import {getGistForks} from '@/services/forks'



export default {
  name: 'home',
  components: {
    HelloWorld,
    search,
    GistItem,
  },
  methods:{
    onDataRecieved(value){
      console.log(value)
      var userGists = value
      userGists.forEach(el => {
        getGistForks(el.id).then(response => {
            let temp = []
            response.data.forEach(fork => {
              console.log('fork=>',fork)
              temp.push({
                  avatarUrl:fork.owner.avatar_url,
                  forkUrl:fork.html_url,
                  name:fork.owner.login,
              })
            })
            this.gistData.push({
              gistUrl:'ejhdwuferfkerkjbfrjsfbewvjsfkewjfq3rvfjhgrkejfv',
              forkInfo:temp
            })
            })
      
      })
      // console.log(this.gistData)
    }
  },
  data: function(){
    return {
      gistData:[],
  //     gistData:[
  //       {
  //         gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
  //         forkInfo:[

  //         {
  //           avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //           name: '@anekix',
  //           forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4",
          
  //       },

  //       {

  //         avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //         name: '@anekix',
  //         forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
  //       },        

  //       {
  //         gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
  //         avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //         name: '@anekix',
  //         forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
  //       },       
  //     ]
  //   },

  //           {
  //         gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
  //         forkInfo:[

  //         {
  //           avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //           name: '@anekix',
  //           forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4",
          
  //       },

  //       {

  //         avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //         name: '@anekix',
  //         forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
  //       },        

  //       {
  //         gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
  //         avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //         name: '@anekix',
  //         forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
  //       },       
  //     ]
  //   },

  //     {
  //         gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
  //         forkInfo:[

  //         {
  //           avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //           name: '@anekix',
  //           forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4",
          
  //       },

  //       {

  //         avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //         name: '@anekix',
  //         forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
  //       },        

  //       {
  //         gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
  //         avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //         name: '@anekix',
  //         forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4"
  //       },       
  //     ]
  //   }
  // ]
}
},
  computed:{
    // gists(){
    //   // return this.$store.state.gists
    //     return [
    //       {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
    //       {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
    //       {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
    //       {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
    //       {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
    //       {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},
    //       {html_url:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3"},


    //     ]
    // },
  //   gists(){
      
  //     var userGists = this.$store.state.gists;
  //     userGists.forEach(el => {
  //       getGistForks(el.id).then(response => {
  //           let temp = []
  //           response.data.forEach(fork => {
  //             console.log('fork=>',fork)
  //             temp.push({
  //                 avatarUrl:fork.owner.avatar_url,
  //                 forkUrl:fork.html_url,
  //                 name:fork.owner.login,
  //             })
  //           })
  //           gistData.push({
  //             gistUrl:'ejhdwuferfkerkjbfrjsfbewvjsfkewjfq3rvfjhgrkejfv',
  //             forkInfo:temp
  //           })
  //           })
      
  //     })
  //     console.log(gistData)
  //     return gistData

  // }

  }
}
</script>
