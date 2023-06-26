<script>
import { store } from '../store.js'
export default {
    props:{
        title: String
    },
    data(){
        return{
            store
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
            <!--SELECT FILTER-->
            <div id="search">
                <label for="type1">Cerca per tipo:</label>
                <select name="type1" id="type1">
                    <option value="0"></option>
                    <option :value="index" v-for="(tipo1,index) in store.listaTipo1">{{tipo1}}</option>
                </select>
                <select name="type2" id="type2">
                    <option value="0"></option>
                    <option :value="index" v-for="(tipo2,index) in store.listaTipo2">{{tipo2}}</option>
                </select>
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
    
</style>