<template>
    <div class="outer_wrapper">
        <div class="inner_wrapper">
        </div>
      <div class="close_button" @click="$emit('closeModal')"></div>
    </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'Modal',
};
</script>

<style lang="scss" scoped>

.outer_wrapper{
    position: fixed;
    background-color: #f6f6f6;
    max-width: 70%;
    height: 60%;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);

    @media (max-width: 767px) {
        max-width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .close_button{
        position: absolute;
        top: 20px;
        right: 30px;
    }
    .close_button::after, .close_button::before {
        position: absolute;
        content: '';
        width: 20px;
        height: 1px;
        display: block;
        background-color: #000000;
    }

    .close_button::before {
        transform: rotate(45deg);
    }

    .close_button::after{
        transform: rotate(-45deg);
    }

}

.inner_wrapper{
    display: flex;

    @media (max-width: 767px) {
        width: 100%;
        height: 100%;
        padding: 50px;
        display: flex;
    }
}

</style>
