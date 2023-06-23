<script>
import AppHeader from'./components/AppHeader.vue'
import AppPokedex from'./components/AppPokedex.vue'
import axios from 'axios'
import { store } from './store.js'
export default {
  components:{
    AppHeader,
    AppPokedex
  },
  data(){
    return{
      store
    }
  },
  mounted(){
    axios.get(store.apiUrl).then((response) => {
        store.pokemonsList = response.data.docs;
    })
  }
}
</script>
<template lang="">
  <div class="pokedex_case">
    <AppHeader title="my pokedex"/>
    <AppPokedex />
  </div>
</template>
<style lang="scss" scoped>
    .pokedex_case{
      background: red;
      width: calc(100vw);
      height: calc(100vh);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
</style>