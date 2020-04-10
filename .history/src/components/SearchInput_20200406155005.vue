<template>
    <div class="search">
      <label for="search">Search</label>
      <input id="search" name="search" v-model="searchValue" @input="handleInput"/>
    </div>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>

<style lang="scss" scoped>
.search{
  display: none;
  //display: flex;
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