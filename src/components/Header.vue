<template>

   <header class="container-full">
      <img src="../assets/spotify-logo.png" width="50" alt="">
   </header>

</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.container-full{
  background-color: rgb(23, 23, 53);
  height: 40px;
  display: flex;
  padding: 5px;
  .img{
    justify-content: space-between;
  }
}
</style>
