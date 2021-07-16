<template>
  <div id="app">
    <Loading v-if="albumsArray.length == 0"/>
    <Header />
    <Main @changealbumsValue="albumsselect" :albumsArray="filteredAlbumsArray"/>
  <!-- andava nel Main @search="searchcardisk" -->
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Loading from './components/Loading.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Loading,
  },
  data() {
    return {
      albumsArray: [],
      // filteredAlbumsArray: [],
      // inputSearch:''
      selectedAlbums: ''
    };
  },
  created() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((response) => {
      this.albumsArray = response.data.response;
      // this.searchcardisk('')
      // this.filteredAlbumsArray = response.data.response;
    })
  },
  computed:{
    filteredAlbumsArray(){
       return this.albumsArray.filter((item) =>{
      // return item.title.includes(this.inputSearch);
       if (item.genre == this.selectedAlbums || this.selectedAlbums == 'All' || this.selectedAlbums == ' '){
        return true
       }
      })
    }
  },
  methods: {
    albumsselect(selected){
      this.selectedAlbums = selected
    }
    // searchcardisk(searchString){
    //   this.inputSearch = searchString
    // }
    // searchcardisk(searchString){
    //  this.filteredAlbumsArray = this.albumsArray.filter((item) =>{
    //   return item.title.includes(searchString);
    // })
    // }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
