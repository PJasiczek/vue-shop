<template>
  <div class="claimWrapper">
      <h1 class="claim">STARLING MISSSION</h1>
      <p class="subclaim">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nulla repudiandae quas odit iusto? Deleniti amet eligendi ut tempora sapiente nam aspernatur beatae! Vitae velit, placeat cumque fugiat et iure dolorum nihil exercitationem perspiciatis quis deleniti assumenda corporis repellendus tenetur cupiditate iusto pariatur neque alias, sint optio, iste quod. Asperiores?</p>
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
