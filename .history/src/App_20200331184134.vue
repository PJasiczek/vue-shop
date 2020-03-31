<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Find Your Setting</router-link>
      <router-link to="/about"></router-link>
    </div>
  <router-view/>
  </div>
</template>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #35363a;
  }
</style>
