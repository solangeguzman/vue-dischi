<template>
 <div class="container cont-img">
   <img :src="poster"/>
   <br>
  
   <div class="title"><strong>{{ title }}</strong></div>  
   <br>
   <div class="text-grey">{{ author }}</div>
   <span class="text-grey">{{ year }}</span>   
 </div>
</template>

<script>
export default {
  name: 'cardisk',
  props:{
      poster: String,
      title: String,
      author: String,
      year: String

  },
};
</script>

<style lang="scss" scoped>
.cont-img{
  margin: 10px;
  width: 200px;
  
  .title{
    color: white;
    font-size: 17px;
  }
  // display: flex;
  // flex-grow: 1;
  img{
    margin-top: 20px;
    margin-bottom: 10px;
    width: 160px;
    height: 160px;  
  }
  .text-grey{
    color: rgb(131, 124, 124);
  }
}
</style>