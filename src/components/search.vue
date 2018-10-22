<template>
  <div>
    <input 
        type='text' 
        v-model='query'
        @keyup='searchFunction'
        placeholder="enter your search query"
    />
    <!--<div v-for="i in gists"> 
        <GistItem :url="i.html_url"/>
    </div>-->
  </div>
</template>

<script>
import GistItem from '@/components/GistItem'
import {getGistForks} from '@/services/forks'

// import {getUserGists} from '@/services/gist'


export default{
    name:'search',
    components:{
      GistItem,  
    },
    props:['dispatchMethod'],
    data: function(){
        return{
            gists:[],
            query:'',
            timeout:null
        }
    },
    methods:{
        searchFunction() {
        var self = this
        clearTimeout(self.timeout)
        self.timeout = setTimeout(function(){
            self.$store.dispatch(self.dispatchMethod, {queryString:self.query})
                .then( data => {
                   // console.log(data)
                    self.$emit('childToParent', data)

                })
        },500)
    }
    }
}
</script>

<style>

</style>
