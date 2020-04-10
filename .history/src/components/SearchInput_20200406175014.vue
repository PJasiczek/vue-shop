<template>
    <div class="searchWrapper">
      <input id="search" name="search" v-model="searchValue" @input="handleInput"/>
    </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'SearchInput',
};
</script>

<style lang="scss" scoped>
.searchWrapper{
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
    height: 50px;
    border: 0;
    text-align: center;
    color: #ffffff;
    font-family: 'Baloo Thambi 2', sans-serif;
    border-bottom: 1px solid #ffffff;
    background: none;
    transition: width .25s ease-in-out;
    font-size: 18px;
  }

  input:focus{
      outline: none;
      width: 120%;
  }
}
</style>