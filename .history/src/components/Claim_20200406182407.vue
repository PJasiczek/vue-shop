<template>
  <div class="claimWrapper">
      <h1 class="claim">STARLING MISSSION</h1>
      <p class="subclaim">SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</p>
      <p class="subclaim">There you can find all information about latest SpaceX missions!</p>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-align: center;

    .claim{
        font-size: 25px;

        @media (min-width: 768px) {
            font-size: 45px;
        }
    }

    .subclaim:first-of-type{
        font-size: 15px;

        @media (min-width: 768px) {
            font-size: 27px;
            font-weight: 200;
        }
    }

    .subclaim:last-of-type{
        font-size: 16px;

        @media (min-width: 768px) {
            font-size: 25px;
            font-weight: 200;
        }
    }
}

</style>
