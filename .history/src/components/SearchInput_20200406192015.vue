<template>
      <input id="search" name="search" v-model="value" @input="handleChange"/>
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
    font-family: 'Baloo Thambi 2', sans-serif;
    border-bottom: 1px solid #ffffff;
    background: none;
    transition: width 5000 ease-in-out;
    font-size: 14px;

    @media (min-width: 768px) {
        font-size: 23px;
        border-bottom: 1.5px solid #ffffff;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }
  }

  input:focus{
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