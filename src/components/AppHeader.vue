<script>
export default {
    props:{
        title: String
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="scanner bubble"></div>
            <div class="level row">
                <div class="red bubble"></div>
                <div class="yellow bubble"></div>
                <div class="green bubble"></div>
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
    
</style>