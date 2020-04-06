<template>
  <div class="backgroudImage"/>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'BackgroudImage',
};
</script>
<style lang="scss" scoped>
.backgroudImage{
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background: url('../assets/4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
