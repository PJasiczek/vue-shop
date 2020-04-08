<template>
    <div :style="style" class="item" />
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      photo: this.item.links.mission_patch,
      title: this.item.mission_name,
    };
  },
  computed: {
    style() {
      return `background-image: url("${this.photo}")`;
    },
  },
};
</script>

<style lang="scss" scoped>
    .item{
        width: 20vh;
        height: 150px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);

        @media (min-width: 768px) and (max-width: 1024px){
            width: 20vh;
            height: 30px;
        }

        @media (min-width: 1024px) {
            width: 40vh;
            height: 300px;
        }
    }

</style>
