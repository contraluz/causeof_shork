<template>
  <div class="home-page" ref="homepage">
    <router-link to="/editor/12138">go </router-link>
    <p @click="goEditor">home</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {
        index: 0
      }
    },
    methods: {
      goEditor() {
        this.index++
        // this.$router.push({path: '/editor', query: {id: 12138}})
      }
    }
  }
</script>

<style>
  
</style>
