<template>
  <div class="claimWrapper">
      <h1 class="claim">STARLING MISSSION</h1>
      <p class="subclaim">SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</p>
      <p class="subclaim">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus aliquid facilis sequi tempore debitis similique facere architecto laboriosam voluptatum!</p>
  </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'Claim',
};
</script>
<style lang="scss" scoped>
.claimWrapper{
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    .claim{
        font-size: 40px;
    }

    .subclaim{
        font-size: 17px;
    }
}

</style>
