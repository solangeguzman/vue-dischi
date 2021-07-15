<template>
 <div class="row cont-main">
   <nav>
   </nav>
    <cardisk
      class="col-3 cont-section-img"  v-for="(item, index) in albumsArray" 
      :key='index'
      :poster='item.poster'
      :title='item.title'
      :author='item.author'
      :year='item.year'
    />
 </div>
</template>

<script>
import cardisk from './cardisk.vue'

export default {
  name: 'Main',
  components:{
     cardisk,
  },
  props: {
      albumsArray: Array,
  },
};
</script>

<style lang="scss" scoped>
.cont-main{
  background-color: rgba(74, 74, 80, 0.788);
  nav{
   height: 50px;
   background-color: brown;
  }
  .cont-section-img{
   background-color: rgba(60, 59, 68, 0.61);
   margin-left: 40px;
   margin-top: 30px; 
  }
 
}
</style>