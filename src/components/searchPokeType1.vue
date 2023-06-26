
<script>
import { store } from '../store.js';
export default {
    data(){
        return{
            store
        }
    }
}
</script>
<template lang="">
    <select name="type1" id="selType1">
        <option value="0"></option>
        <option :value="index" v-for="(tipo1,index) in store.listaTipo1">{{tipo1}}</option>
    </select>
</template>
<style lang="">
    
</style>