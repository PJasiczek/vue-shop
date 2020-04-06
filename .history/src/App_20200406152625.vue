<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Find Your Setting</router-link>
    </div>
  <router-view/>
  </div>
</template>

<style lang="scss">

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
  }
</style>
