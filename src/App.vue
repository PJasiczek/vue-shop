<template>
  <div :class="[{wrapper__input_start: step === 1}, 'wrapper']">
    <img v-if="step === 1" src="./assets/spaceX-black.svg" class="logo" />
    <img v-if="step === 0" src="./assets/spaceX-white.svg" class="logo" />
    <transition name="fade">
      <BackgroundImage v-if="step === 0" />
    </transition>
    <Claim v-if="step === 0" />
    <SearchInput v-model="searchValue" @input="handleInput" :dark="step === 1"/>
    <div class="wrapper__results" v-if="results && !loading && step === 1">
      <Item v-for="item in results" :item="item" :key="item.flight_number" @click.native="handleModalOpen(item)" />
    </div>
    <Modal v-if="modalOpen" @closeModal="modalOpen = false" :item="modalItem"/>
  </div>
</template>
<script>

import debounce from 'lodash/debounce';

import Claim from '@/components/Claim.vue';

import SearchInput from '@/components/SearchInput.vue';

import BackgroundImage from '@/components/BackgroundImage.vue';

import Item from '@/components/Item.vue';

import Modal from '@/components/Modal.vue';

const axios = require('axios');

const API = 'https://api.spacexdata.com/v3/launches?rocket_name=';

export default {
  name: 'Search',
  components: {
    Claim, SearchInput, BackgroundImage, Item, Modal,
  },
  data() {
    return {
      loading: false,
      step: 0,
      searchValue: '',
      results: [],
      modalOpen: false,
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
    handleModalOpen(item) {
      console.log(item);
      this.modalItem = item;
      this.modalOpen = true;
    },
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

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #555555;
}

::-webkit-scrollbar-thumb:hover {
  background: #555555;
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

  &.wrapper__input_start {
    justify-content: flex-start;
  }
}

.logo {
  position: absolute;
  top: 30px;
  left: 0;;
  margin: 0 auto;
  transform: scale(0.6);

  @media (min-width: 768px) and (max-width: 1024px){
    top: 30px;
    left: 0;
    transform: scale(0.6);
  }

  @media (max-width: 768px) {
    top: 10px;
    left: 0;
    right: 0;
    transform: scale(0.5);
  }

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.wrapper__results{
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (min-width: 768px) and (max-width: 1024px){
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}

</style>
