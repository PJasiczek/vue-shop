<template>
  <div class="wrapper">
    <Claim/>
    <SearchInput/>
  </div>
</template>

<script>

import debounce from 'lodash/debounce';

import Claim from '@/components/Claim.vue';

import SearchInput from '@/components/SearchInput.vue';

const axios = require('axios');

const API = 'https://api.spacexdata.com/v3/launches?rocket_name=';

export default {
  name: 'Search',
  components: {
    Claim, SearchInput,
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
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
  background: url('../assets/3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
