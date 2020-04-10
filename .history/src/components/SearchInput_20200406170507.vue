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
  width: 250px;

  input{
    height: 50px;
    border: 0;
    text-align: center;
    border-bottom: 1px solid #ffffff;
    background: none;
    transition: box-shadow .5s, width 1s;
    color: #ffffff;
  }

  input:focus{
      outline: none;
      box-shadow: 0px 5px 10px -8px #ffffff;
      width: 300px;
  }
}
</style>