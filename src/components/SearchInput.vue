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
  width: 250px;
  border: 0;
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  font-family: 'Quicksand', sans-serif;
  border-bottom: 1.5px solid #ffffff;
  background: none;
  transition: box-shadow 2s;
  font-size: 17px;
  margin-top: 10px;
  outline: none;

  @media (min-width: 768px) and (max-width: 1024px){
    outline: none;
    height: 30px;
    font-size: 15px;
    margin-top: 20px;
  }

  @media (max-width: 767px) {
    outline: none;
    height: 30px;
    font-size: 10px;
    margin-top: 10px;
    width: 150px;
  }

  &:hover{
    outline: none;
    box-shadow: -1px 10px 10px -11px rgba(255,255,255,0.75);
  }
}

.dark{
  color: #000000;
  border-bottom: 1.5px solid #1e3d4a;
  background: none;
  margin-top: 40px;

  @media (min-width: 768px) and (max-width: 1024px){
    margin-top: 60px;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
  }

  &:hover{
    outline: none;
    box-shadow: -1px 10px 10px -11px rgba(0,0,0,0.75);
  }
}

</style>