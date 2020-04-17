<template>
  <div class="claim_wrapper">
    <h1 class="claim_wrapper__claim">STARLING MISSSION</h1>
    <p class="claim_wrapper__subclaim">
      SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was
      founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people
      to live on other planets.
    </p>
    <p class="claim_wrapper__subclaim">
      There you can find all information about latest SpaceX missions!
    </p>
  </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'Claim',
};
</script>
<style lang="scss" scoped>
.claim_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;

  .claim_wrapper__claim {
    font-size: 35px;
    letter-spacing: 1px;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 35px;
    }

    @media (max-width: 767px) {
      font-size: 25px;
    }
  }

  .claim_wrapper__subclaim {
    width: 60%;

    @media (min-width: 768px) and (max-width: 1024px) {
      width: 100%;
      letter-spacing: 1px;
    }

    @media (max-width: 767px) {
      width: 100%;
      letter-spacing: 1px;
    }
  }

  .claim_wrapper__subclaim:first-of-type {
    font-size: 19px;
    letter-spacing: 1px;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
      font-weight: 200;
    }

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  .claim_wrapper__subclaim:last-of-type {
    font-size: 18px;
    letter-spacing: 1px;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 21px;
      font-weight: 200;
    }

    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
}
</style>
