<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Find Your Setting</router-link>
    </div>
  <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;500;600;700;800&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Baloo Thambi 2', sans-serif;
  }
</style>
