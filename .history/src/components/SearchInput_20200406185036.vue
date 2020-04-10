<template>
      <input id="search" name="search" v-model="searchValue" @input="handleInput"/>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'SearchInput',
};
</script>

<style lang="scss" scoped>
  input{
        display: flex;
  flex-direction: column;
  align-items: center;
    height: 50px;
    border: 0;
    text-align: center;
    color: #ffffff;
    opacity: 0.7;
    font-family: 'Baloo Thambi 2', sans-serif;
    border-bottom: 1px solid #ffffff;
    background: none;
    transition: width .25s ease-in-out;
    font-size: 14px;

    @media (min-width: 768px) {
        font-size: 23px;
        border-bottom: 1.5px solid #ffffff;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }
  }

  input:focus{
      outline: none;
      width: 150%;
  }
}
</style>