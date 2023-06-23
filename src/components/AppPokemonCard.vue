
<script>
export default {
    props:{
        myPokemon: Object
    }
}
</script>
<template lang="">
    <div class="card" :class="[myPokemon.type1=='Grass'?'grass_bg':'',myPokemon.type1=='Fire'?'fire_bg':'',myPokemon.type1=='Water'?'water_bg':'']" >
        <div class="circle">
            <img :src="myPokemon.imageUrl" alt="myPokemon.name">
        </div>
        <p class="number">{{myPokemon.number}}</p>
        <h4 class="name">{{myPokemon.name}}</h4>
        <div class="type">
            <p class="type_1" :class="[myPokemon.type1=='Grass'?'grass':'',myPokemon.type1=='Fire'?'fire':'',myPokemon.type1=='Water'?'water':'']" >{{myPokemon.type1}}</p>
            <p class="type_2" :class="[myPokemon.type2=='Poison'?'poison':'',myPokemon.type2=='Flying'?'flying':'',myPokemon.type2=='Dragon'?'dragon':'']" v-if="myPokemon.type2 !==null">{{myPokemon.type2}}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-radius: 20px;
}
.circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    overflow: hidden;
    background-color: white;

}
.circle img{
    object-position: 0px;
    width: 90%;
    max-height: 90%;
    object-fit: cover;
}

p, h4{
margin: 2px;
}

.type{
    margin-top: 5px;
}

.type p{
    display: inline;
    padding: 2px 10px;
    border-radius: 5px;
    color: white;
}

.grass{
    background-color: rgb(116, 216, 107);
}
.fire{
    background-color: rgb(254, 73, 52)
}

.water{
    background-color: rgb(32, 148, 246)
}

.grass_bg{
    background-color: rgba(116, 216, 107, 0.4); 
}
.fire_bg{
    background-color: rgb(254, 73, 52, 0.4); 
}

.water_bg{
    background-color: rgb(32, 148, 246, 0.4); 
}
.poison{
    background-color: rgb(186, 91, 159);
}
.flying{
    background-color: rgb(153, 166, 225)
}

.dragon{
    background-color: rgb(133, 102, 238)
}

</style>

