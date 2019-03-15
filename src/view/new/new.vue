<template>
    <div>
        <div class="new-content">
            <div class="left"></div>
            <div class="middle"></div>
            <div class="right"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="">
 .new-content{
        border: 1px solid red;
        width: 80%;
        min-height: 300px;
        margin: 100px auto 0;
        position: relative;
        
    }
    .left{
        background-color: rgb(240, 240, 240);
    }.middle{
        background-color: rgb(255, 255, 255);
    }
@media screen and (min-width: 1000px) {
    
    .left{
        width: 40%;
        min-height: 300px;
        border: 1px solid red;
        float: left;
        margin-right: 5px;
    }
    .middle{
       width: 20%;
        min-height: 300px;
        border: 1px solid red;
        float: left;
        margin-right: 5px;
    }
    .right{
        width: 300px;
        min-width: 300px;
        float: right;
        border: 1px solid red;
        min-height: 300px;
        position: absolute;
        right:0;
        top: 0;
    }
}
   
    @media screen and (max-width:1000px){
  .left{
        width: 100%;
        min-height: 300px;
        border: 1px solid red;
      
    }
    .middle{
       width: 100%;
        min-height: 300px;
        border: 1px solid red;
     
    }
    .right{
        width: 100%;
        min-width: 300px;
       
        border: 1px solid red;
        min-height: 300px;
      
        background-color: rgb(185, 45, 45);
      
      
    }
}
</style>