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
    width: 250px;
    border: 0;
    text-align: center;
    border-bottom: 1px solid #ffffff;
    background: none;
    transition: box-shadow .5s, width 0.25s ease-in-out;
    color: #ffffff;
  }

  input:focus{
      outline: none;
      box-shadow: -1px 11px 16px -14px #ffffff;
      width: 300px;
  }
}
</style>