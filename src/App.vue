<template>
  <div :class="[{inputStart: step === 1}, 'wrapper']">
    <img src="./assets/SpaceX.svg" class="logo" />
    <transition name="fade">
      <BackgroundImage v-if="step === 0" />
    </transition>
    <Claim v-if="step === 0" />
    <SearchInput v-model="searchValue" @input="handleInput" :dark="step === 1"/>
    <div class="results" v-if="results && !loading && step === 1">
      <Item v-for="item in results" :item="item" :key="item.flight_number"/>
    </div>
  </div>
</template>
<script>

import debounce from 'lodash/debounce';

import Claim from '@/components/Claim.vue';

import SearchInput from '@/components/SearchInput.vue';

import BackgroundImage from '@/components/BackgroundImage.vue';

import Item from '@/components/Item.vue';

const axios = require('axios');

const API = 'https://api.spacexdata.com/v3/launches?rocket_name=';

export default {
  name: 'Search',
  components: {
    Claim, SearchInput, BackgroundImage, Item,
  },
  data() {
    return {
      loading: false,
      step: 0,
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function() {
      this.loading = true;
      console.log(this.searchValue);
      axios.get(`${API}${this.searchValue}`)
        .then((response) => {
          this.results = response.data;
          this.loading = false;
          this.step = 1;
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
    }, 500),
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap');

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
  }

  .wrapper {
    position: relative;
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 30px;

    &.inputStart {
      justify-content: flex-start;
    }
  }

  .logo {
    position: absolute;
    top: 30px;
    left: 0;
    transform: scale(0.6);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .results{
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
  }
</style>
