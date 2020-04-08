<template>
      <input id="search" :class="{dark}" name="search" :value="value" @input="handleChange"/>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  input{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
    border: 0;
    text-align: center;
    color: #ffffff;
    opacity: 0.7;
    font-family: 'Quicksand', sans-serif;
    border-bottom: 1px solid #ffffff;
    background: none;
    transition: width 2s;
    font-size: 14px;

    @media (min-width: 768px) {
        font-size: 23px;
        border-bottom: 1.5px solid #ffffff;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }

    &:focus{
      outline: none;
      width: 200px;

      @media (min-width: 768px) {
          width: 260px;
      }

      @media (min-width: 1024px) {
          width: 320px;
      }
    }
  }

  .dark{
    color: #000000;
    border-bottom: 1.5px solid #1e3d4a;
  }

  .dark:focus{
      outline: none;
      width: 200px;

      @media (min-width: 768px) {
          width: 260px;
      }

      @media (min-width: 1024px) {
          width: 320px;
      }
    }
</style>