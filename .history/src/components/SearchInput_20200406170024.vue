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
  width: 250px;

  input{
    height: 50px;
    border: 0;
    border-bottom: 1px solid #ffffff;
    background: none;
    transition: box-shadow .5s;
    color: #ffffff;
  }

  input:focus{
      outline: none;
      box-shadow: 0px 5px 10px -8px #ffffff;
  }
}
</style>