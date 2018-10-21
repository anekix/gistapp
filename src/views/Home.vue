<template>
  <div class="home">
       <search/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import search from '@/components/search.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    search
  }
}
</script>
