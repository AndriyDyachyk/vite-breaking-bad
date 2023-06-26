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
    axios.get(`${store.apiUrl}${store.type1Searched}${store.type2Searched}`).then((response) => {store.pokemonsList = response.data.docs})
    axios.get(`${store.apiUrl}${store.type1Searched}${store.type2Searched}`).then((response) => {store.maxPages = response.data.totalPages})
    axios.get(store.apiType1Url).then((response) => {
      store.listaTipo1 = response.data;
    }),
    axios.get(store.apiType2Url).then((response) => {
      store.listaTipo2 = response.data;
    })
  },
  methods:{
    displayPokemon(){
      store.page= 1
      axios.get(`${store.apiUrl}&page=${store.page}${store.type1Searched}${store.type2Searched}`).then((response) => {store.pokemonsList = response.data.docs})
      axios.get(`${store.apiUrl}${store.type1Searched}${store.type2Searched}`).then((response) => {store.maxPages = response.data.totalPages})
    },
    filterForType1(type1PokeValue){
      if(type1PokeValue !== ""){
        store.type1Searched = `&eq[type1]=${type1PokeValue}`
      }else{
        store.type1Searched = ''
      }
    },
    filterForType2(type2PokeValue){
      if(type2PokeValue !== ''){
        store.type2Searched = `&eq[type2]=${type2PokeValue}`
      }else{
        store.type2Searched = ''
      }
    },
    pageBackward(){
      if(store.page > 1){
        store.page--;
        axios.get(`${store.apiUrl}&page=${store.page}${store.type1Searched}${store.type2Searched}`).then((response) => {store.pokemonsList = response.data.docs})
      }
    },
    pageForward(){
      if(store.page < store.maxPages){
        store.page++;
        axios.get(`${store.apiUrl}&page=${store.page}${store.type1Searched}${store.type2Searched}`).then((response) => {store.pokemonsList = response.data.docs})
      }
    }
  }
}
</script>
<template lang="">
  <div class="pokedex_case">
    <AppHeader title="my pokedex" @filterType1="filterForType1" @filterType2="filterForType2" @searched="displayPokemon" @pageDown="pageBackward" @pageUp="pageForward"/>
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