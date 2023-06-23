<script>
import AppPokemonCard from './AppPokemonCard.vue'
import { store } from '../store.js'
export default {
    components:{
        AppPokemonCard
    },
    data(){
        return{
            store
        }
    }
}
</script>
<template lang="">
    <div class="metal_frame">
        <div class="display">
            <div class="white_card" v-for="(pokemon, index) in store.pokemonsList" >
                <AppPokemonCard :myPokemon="pokemon" :key="pokemon.number"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .metal_frame{
        width: 1200px;
        display: flex;
        justify-content: center;
        align-items:center;
        padding: 5px;
        background: linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 60px) calc(100% - 60px) no-repeat,
                    linear-gradient(215deg, #ababab 0%, #d1d1d1 37%, rgba(209, 209, 209, 1) 37%, #858686 100%) 74% 52%/189% 125%;
        border-radius: 20px;
        padding: 13px;
    }
    .display{
        width: 1200px;
        display: flex;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        align-items:center;
        background: rgb(101,101,101);
        background: -moz-linear-gradient(148deg, rgba(101,101,101,1) 10%, rgba(0,0,0,1) 88%);
        background: -webkit-linear-gradient(148deg, rgba(101,101,101,1) 10%, rgba(0,0,0,1) 88%);
        background: linear-gradient(148deg, rgba(101,101,101,1) 10%, rgba(0,0,0,1) 88%);
        padding: 20px;
        border-radius: 20px;
    }
    .white_card{
        background: rgb(255,255,255);
        background: -moz-radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0.3311449579831933) 100%);
        background: -webkit-radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0.3311449579831933) 100%);
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0.3311449579831933) 100%);
        width: calc(100% / 5 - 10px);
        margin: 5px;
        height: 200px;
        border-radius: 20px;
    }
</style>