<template>
  <div class="wrapper">
    <BackgroundImage/>
    <Claim/>
    <SearchInput v-model="searchValue" @input="handleInput"/>
  </div>
</template>

<script>

import debounce from 'lodash/debounce';

import Claim from '@/components/Claim.vue';

import SearchInput from '@/components/SearchInput.vue';

import BackgroundImage from '@/components/BackgroundImage.vue';

const axios = require('axios');

const API = 'https://api.spacexdata.com/v3/launches?rocket_name=';

export default {
  name: 'Search',
  components: {
    Claim, SearchInput, BackgroundImage,
  },
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function() {
      console.log(this.searchValue);
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

<style lang="scss">
  //@import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,900&display=swap');

  *{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    //font-family: 'Baloo Thambi 2', sans-serif;
  }
  .wrapper{
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 30px;
  }

</style>
