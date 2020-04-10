<template>
  <div class="backgroud_image"/>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'BackgroudImage',
  methods: {
    backgroudnAnimation(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.backgroud_image{
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background: url('../assets/4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 55% 70%;
}

</style>
