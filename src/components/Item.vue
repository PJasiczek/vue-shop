<template>
  <div class="item">
    <div v-if="!backgroud_header.length" :style="defaultStyle" class="item__header"/>
    <div v-if="backgroud_header.length" :style="style" class="item__header"/>
    <div class="item__patch">
      <img v-if="photo !== null" :src="photo" class="patch" />
      <img v-if="photo === null"  src="../assets/spaceX-black.svg" class="patch" />
    </div>
    <div class="item__name">{{this.name.substring(0,13)}}</div>
    <div class="item__description">{{this.details.substring(0,130)+".."}}</div>
    <div class="item__details">
      <div class="item__details__left">
        <img src="../assets/map-marker.svg" class="marker" />
        <div class="item__details__left__location">
          {{this.location}}
        </div>
      </div>
      <div class="item__details__right">
        <img src="../assets/calendar-month-outline.svg" class="calendar" />
        <div class="item__details__right__date">
          {{this.date.substring(0,10)}}
        </div>
      </div>
    </div>
    <div class="item__button"><button class="button">Read more</button></div>
  </div>
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
    step: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      backgroud_header: null,
      name: null,
      details: null,
      photo: null,
      title: null,
      location: null,
      date: null,
    };
  },
  mounted() {
    this.backgroud_header = this.item.links.flickr_images;
    this.name = this.item.mission_name;
    this.details = this.item.details;
    this.photo = this.item.links.mission_patch;
    this.title = this.item.mission_name;
    this.location = this.item.launch_site.site_name;
    this.date = this.item.launch_date_local;
  },
  computed: {
    style() {
      return `background-image: url("${this.backgroud_header}")`;
    },
    defaultStyle() {
      return 'background-image: url("https://www.spacex.com/sites/spacex/files/styles/new_gallery_large/public/39a_02_poidx-cape-120816-bi0i1513.jpg?itok=4Z91s-KU")';
    },
  },
};
</script>

<style lang="scss" scoped>

.item{
  position: relative;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  -webkit-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);

  @media (min-width: 768px) and (max-width: 1024px){
      width: 220px;
      height: 310px;
  }

  @media (max-width: 767px) {
      width: 140px;
      height: 210px;
  }

}

.item__header{
  position: absolute;
  width: 100%;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  -webkit-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 10px -11px rgba(0,0,0,0.75);

  @media (max-width: 767px) {
    height: 100px;
  }
}

.item__patch{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50% 50%;
  background-color: #ffffff;
  -webkit-box-shadow: 5px 10px 10px -11px rgba(0,0,0,0.75);
  -moz-box-shadow: 5px 10px 10px -11px rgba(0,0,0,0.75);
  box-shadow: 5px 10px 10px -11px rgba(0,0,0,0.75);

  @media (max-width: 767px) {
    top: 80px;
    right: 10px;
    width: 40px;
    height: 40px;
  }

  .patch{
    width: 50px;
    height: 50px;

    @media (max-width: 767px) {
      width: 30px;
      height: 30px;
    }
  }
}

.item__button{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    background-color: #000000b4;
    border: none;
    color: white;
    padding: 5px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-family: 'Quicksand', sans-serif;
    font-size: 10px;
    cursor: pointer;
    border-radius: 2px 2px 2px 2px;
    -webkit-box-shadow: 5px 10px 10px -11px rgba(0,0,0,0.75);
    -moz-box-shadow: 5px 10px 10px -11px rgba(0,0,0,0.75);
    box-shadow: 5px 10px 10px -11px rgba(0,0,0,0.75);

    @media (max-width: 767px) {
      padding: 5px 20px;
      font-size: 8px;
    }
  }
}

.item__name{
  position: absolute;
  top: 170px;
  left: 30px;
  width: 50%;
  height: 50px;
  font-weight: 700;
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;

  @media (max-width: 767px) {
    width: 70%;
    top: 110px;
    left: 15px;
  }
}

.item__description{
  position: absolute;
  top: 203px;
  left: 30px;
  width: 80%;
  height: 30px;
  font-family: 'Quicksand', sans-serif;
  font-size: 9px;
  text-align: justify;
  text-overflow: ellipsis;

  @media (max-width: 767px) {
    display: none;
  }
}

.item__details{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  top: 240px;
  width: 100%;
  height: 20px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 9px;

  @media (min-width: 768px) and (max-width: 1024px){
    top: 250px;
  }

  @media (max-width: 767px) {
    top: 135px;
    height: 40px;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  .item__details__left{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media (max-width: 767px) {
      width: 90%;
    }
  }

  .item__details__right{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media (max-width: 767px) {
      width: 90%;
    }
  }

  .item__details__left__location{
    width: 100%;

    @media (max-width: 767px) {
      width: 90%;
    }
  }

  .item__details__right__date{
    width: 100%;

    @media (max-width: 767px) {
      width: 90%;
    }
  }

  .calendar, .marker {
    transform: scale(0.5);
  }
}
</style>
