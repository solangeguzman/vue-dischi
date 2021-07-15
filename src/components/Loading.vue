<template>
    <div class="loading">
       Loading...
    </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style lang="scss" scoped>
 .loading{
     position: fixed;
     left: 0;
     width: 100%;
     height: 100vh;
     background: white;
     display: flex;
     justify-content: center;
     align-content: center;
 }
</style>