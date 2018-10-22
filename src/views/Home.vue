<template>
  <div class="home">
      <div class="main_wrapper">
       <div class="gist__wrapper">
        <search dispatchMethod='fetchUserGists' v-on:childToParent="onDataRecieved"/>
        <GistItem v-for="item in gistData" :gist-data="item" class="gist__infobox" />
       </div>

     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import search from '@/components/search.vue';
import GistItem from '@/components/GistItem'
import {getGistForks} from '@/services/forks'
import {fileTypeToTag} from '@/utils/main'






export default {
  name: 'home',
  components: {
    HelloWorld,
    search,
    GistItem,
  },
  methods:{
    getTagsAndFileName(filesObj){
      // alert(JSON.stringify(data))
      // console.log('oo',data)
      const fileNames = Object.keys(filesObj);
      let tags = []
      for (let i = 0; i < fileNames.length; i++) {
          var fileName = fileNames[i];
          // console.log('fn',fileName)
          console.log('fo',filesObj[fileName]['type'])
          tags.push(filesObj[fileName]['type'])
      }
      tags = fileTypeToTag(tags)
      return { tags:tags, files:fileNames }

    },
    onDataRecieved(value){
      console.log(value)
      var userGists = value
      userGists.forEach(el => {
        getGistForks(el.id).then(response => {
            let temp = []
            response.data.forEach(fork => {
              // console.log('fork=>',fork)
              temp.push({
                  avatarUrl:fork.owner.avatar_url,
                  forkUrl:fork.html_url,
                  name:fork.owner.login,
              })
            })

            let metaInfo = this.getTagsAndFileName(el.files)
            let gistUrl = el.html_url
            this.gistData.push({
              gistMeta:metaInfo,
              gistUrl:gistUrl,
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
  //         tags:['python', 'javascript','elm','ruby','lisp','python', 'javascript','elm','ruby','lisp'],

  //         forkInfo:[

  //         {
  //           avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //           name: '@ashisray12',
  //           forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4",
          
  //       },

  //       {

  //         avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //         name: '@gautamagrawwal2',
  //         forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4",

  //       },        

  //       {
  //         gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
  //         avatarUrl:"http://www.simon-li.com/projects/mongkok-wp/wp-content/uploads/2014/07/random-user-31.jpg" ,
  //         name: '@anekix',
  //         forkUrl:"https://avatars3.githubusercontent.com/u/10773612?v=4",
  //                     tags:['python', 'javascript','elm','ruby','lisp']

  //       },       
  //     ]
  //   },

  //           {
  //         gistUrl:"https://gist.github.com/95ecc104bc05ede915492367d2d72cb3",
  //               tags:['python', 'javascript','elm','ruby','lisp'],

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
  //         tags:['python', 'javascript','elm','ruby','lisp'],

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
<style lang="stylus" scoped>

.gist__wrapper
  display flex
  flex-direction column
  align-items: center
  justify-content: center

</style>
