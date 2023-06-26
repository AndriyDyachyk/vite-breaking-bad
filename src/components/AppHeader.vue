<script>
import { store } from '../store.js'
export default {
    props:{
        title: String
    },
    data(){
        return{
            store,
            type1PokeValue: '',
            type2PokeValue: ''
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="bubble_row">
                <div class="scanner bubble"></div>
                <div class="level bubble_row">
                    <div class="red bubble"></div>
                    <div class="yellow bubble"></div>
                    <div class="green bubble"></div>
                </div>
            </div>
            <div class="row">
                <button v-on:click="$emit('pageDown')">&lt;</button>
                <p>Pagina:{{store.page}}/{{store.maxPages}}</p>
                <button v-on:click="$emit('pageUp')">&gt;</button>
            </div>
            <!--SELECT FILTER-->
            <div id="search">
                <label>Cerca per tipo:</label>
                <select name="type1" v-model="type1PokeValue" v-on:change="$emit('filterType1', type1PokeValue)">
                    <option selected="selected" value=''></option>
                    <option :value="tipo1" v-for="(tipo1,index) in store.listaTipo1" :key="index">{{tipo1}}</option>
                </select>
                <select name="type2" v-model="type2PokeValue" v-on:change="$emit('filterType2', type2PokeValue)">
                    <option selected="selected" value=''></option>
                    <option :value="tipo2" v-for="(tipo2,index) in store.listaTipo2" :key="index">{{tipo2}}</option>
                </select>
                <button v-on:click="$emit('searched')">Cerca</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

    .container{
        width: 1200px;
    }
    .row{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .bubble_row{
        display: flex;
        flex-direction: row;
        align-self: flex-start;
        margin-bottom: 20px;
        margin-left: 10px;
    }
    .bubble{
        border: 3px solid white;
        border-radius: 50%;
    }

    .scanner{
        width: 55px;
        height: 55px;
        background: rgb(255,255,255);
        background: -moz-radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(94,173,208,1) 56%);
        background: -webkit-radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(94,173,208,1) 56%);
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(94,173,208,1) 56%);
        background-position: -15px -15px;
    }
    
    .level .bubble{
        width: 20px;
        height: 20px;
        margin: 0px 20px;
        background-position: 15px 15px;
    }
    .red{
        background: rgb(255,255,255);
        background: -moz-radial-gradient(circle, rgba(255,255,255,1) 0%, red 56%);
        background: -webkit-radial-gradient(circle, rgba(255,255,255,1) 0%, red 56%);
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, red 56%);
    }
    .yellow{
        background: rgb(255,255,255);
        background: -moz-radial-gradient(circle, rgba(255,255,255,1) 0%, yellow 56%);
        background: -webkit-radial-gradient(circle, rgba(255,255,255,1) 0%, yellow 56%);
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, yellow 56%);
    }
    .green{
        background: rgb(255,255,255);
        background: -moz-radial-gradient(circle, rgba(255,255,255,1) 0%, green 56%);
        background: -webkit-radial-gradient(circle, rgba(255,255,255,1) 0%, green 56%);
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, green 56%);
    }

    #search select{
        width: 100px;
        margin: 0px 10px;
    }

    .row button{
        margin: 0px 10px
    }
    
</style>