<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label>
      <input id="search" name="search" v-model="searchValue" @input="handleInput"/>
     </div>
  </div>
</template>

<script>
const axios = require('axios');

const API = 'https://api.spacexdata.com/v3/launches/';

export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    handleInput() {
      axios.get(`${API}${this.searchValue}`)
        .then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}

.search{
  display: flex;
  flex-direction: column;
  width: 250px;

  label{
    font-family: sans-serif;
  }

  input{
    height: 50px;
    border: 0;
    border-bottom: 1px solid black;
  }
}
</style>
