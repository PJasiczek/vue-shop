<template>
    <div class="search">
      <label for="search">Search</label>
      <input id="search" name="search" v-model="searchValue" @input="handleInput"/>
    </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>
<style lang="scss" scoped>

.claimWrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
