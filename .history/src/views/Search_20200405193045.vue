<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label>
      <input id="search" name="search" v-model="searchValue" @input="handleInput"/>
      <ul>
        <li v-for="result in results">
          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import debounce from 'lodash/debounce';

const axios = require('axios');

const API = 'https://api.spacexdata.com/v3/launches?rocket_name=';

export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function() {
      axios.get(`${API}${this.searchValue}`)
        .then((response) => {
          this.results = response.data;
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
    }, 500),
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
