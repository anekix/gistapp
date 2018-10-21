<template>
  <div>
    <input 
        type='text' 
        v-model='query'
        @keyup='getUserGists'
        placeholder="enter user name"
    />
    <div v-for="i in gists"> 
        <GistItem :url="i.html_url"/>
    </div>
  </div>
</template>

<script>
import GistItem from '@/components/GistItem'
// import {getUserGists} from '@/services/gist'


export default{
    name:'search',
    components:{
      GistItem,  
    },
    data: function(){
        return{
            gists:[],
            query:'',
            timeout:null
        }
    },
    methods:{
        getUserGists() {
        var self = this
        clearTimeout(self.timeout)
        self.timeout = setTimeout(function(){
            self.$store.dispatch('fetchUserGists', {username: self.query})
                .then( gists => {
                    self.gists = gists
                })
            console.log('hi')
        },500)
    }
    }
}
</script>

<style>

</style>
