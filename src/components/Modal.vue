<template>
    <div class="outer_wrapper">
        <div class="inner_wrapper">
            <div v-if="!backgroud_header.length" :style="defaultStyle" class="inner_wrapper__header"/>
            <div v-if="backgroud_header.length" :style="style" class="inner_wrapper__header"/>
            <div class="inner_wrapper__patch">
              <img v-if="photo !== null" :src="photo" class="patch" />
              <img v-if="photo === null"  src="../assets/spaceX-black.svg" class="patch" />
            </div>
            <div class="inner_wrapper__name">{{this.item.mission_name}}</div>
            <div class="inner_wrapper__box">
              <div class="inner_wrapper__box__item_title"><b>Launch data</b></div>
              <div class="inner_wrapper__box__item"><b>Launch date: </b>{{this.item.launch_date_utc.substring(0,10)}}</div>
              <div class="inner_wrapper__box__item"><b>Launch site name: </b>{{this.item.launch_site.site_name_long}} ({{this.item.launch_site.site_name}})</div>
              <div class="inner_wrapper__box__item"><b>Launch success: </b>{{this.item.launch_success ? 'Yes' : 'No'}}</div>
            </div>
            <div class="inner_wrapper__box">
              <div class="inner_wrapper__box__item_title"><b>Details</b></div>
              <div class="inner_wrapper__box__item">{{this.item.details}}</div>
            </div>
            <div class="inner_wrapper__gallery">
              <div class="inner_wrapper__gallery__inner">
                <div class="inner_wrapper__gallery__inner__item_1" @click="handleClickLeft"><img src="../assets/chevron-left.svg" class="marker" /></div>
                <div class="inner_wrapper__gallery__inner__item_2"><div class="item__photo_left"></div></div>
                <div class="inner_wrapper__gallery__inner__item_3"></div>
                <div class="inner_wrapper__gallery__inner__item_4"><div class="item__photo_right"></div></div>
                <div class="inner_wrapper__gallery__inner__item_5"></div>
              </div>
            </div>
            <div class="inner_wrapper__box">
              <div class="inner_wrapper__box__item_title"><b>YouTube</b></div>
              <div class="inner_wrapper__box__item_video">
                <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + this.item.links.youtube_id" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="inner_wrapper__box">
              <div class="inner_wrapper__box__item_title"><b>Links</b></div>
              <div class="inner_wrapper__box__item"><b>Reddit campaing: </b><a :href="this.item.links.reddit_campaign" target="_blank">{{this.item.links.reddit_campaign}}</a></div>
              <div class="inner_wrapper__box__item"><b>Reddit launch: </b><a :href="this.item.links.reddit_launch" target="_blank">{{this.item.links.reddit_launch}}</a></div>
              <div class="inner_wrapper__box__item"><b>Reddit recovery: </b><a :href="this.item.links.reddit_recovery" target="_blank">{{this.item.links.reddit_recovery}}</a></div>
              <div class="inner_wrapper__box__item"><b>Reddit media: </b><a :href="this.item.links.reddit_media" target="_blank">{{this.item.links.reddit_media}}</a></div>
              <div class="inner_wrapper__box__item"><b>Press kit: </b><a :href="this.item.links.presskit" target="_blank">{{this.item.links.presskit}}</a></div>
              <div class="inner_wrapper__box__item"><b>Article: </b><a :href="this.item.links.article_link" target="_blank">{{this.item.links.article_link}}</a></div>
              <div class="inner_wrapper__box__item"><b>Wikipedia: </b><a :href="this.item.links.wikipedia" target="_blank">{{this.item.links.wikipedia}}</a></div>
            </div>
        </div>
      <div class="close_button" @click="$emit('closeModal')"></div>
    </div>
</template>

<script>
/* eslint-disable eol-last */

const $ = require('jquery');

export default {
  name: 'Modal',
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      backgroud_header: this.item.links.flickr_images,
      photo: this.item.links.mission_patch,
      launch_place_short: this.item.launch_site.site_name,
      photos: this.item.links.flickr_images,
      video_link: '',
      iterator: 0,
      is_left: false,
      is_start: false,
    };
  },
  methods: {
    handleClickLeft() {
      this.iterator += 1;
      if (this.is_start === true) {
        $('.item__photo_left').css('background-image', `url("${this.photos[0]}")`);
        $('.inner_wrapper__gallery__inner__item_3').css('background-image', `url("${this.photos[1]}")`);
        $('.item__photo_right').css('background-image', `url("${this.photos[2]}")`);
        this.is_start = false;
        this.iterator = 0;
      } else if ((this.is_left === false) && (this.iterator < (parseInt(Object.keys(this.photos).length, 10) - 2))) {
        $('.item__photo_left').css('background-image', `url("${this.photos[parseInt(this.iterator, 10)]}")`);
        $('.inner_wrapper__gallery__inner__item_3').css('background-image', `url("${this.photos[parseInt(this.iterator, 10) + 1]}")`);
        $('.item__photo_right').css('background-image', `url("${this.photos[parseInt(this.iterator, 10) + 2]}")`);
      } else if (this.iterator === (parseInt(Object.keys(this.photos).length, 10) - 2)) {
        $('.item__photo_left').css('background-image', `url("${this.photos[parseInt(Object.keys(this.photos).length, 10) - 2]}")`);
        $('.inner_wrapper__gallery__inner__item_3').css('background-image', `url("${this.photos[parseInt(Object.keys(this.photos).length, 10) - 1]}")`);
        $('.item__photo_right').css('background-image', `url("${this.photos[0]}")`);
        this.is_left = true;
        this.iterator = 0;
      } else if ((this.is_left === true) && (this.iterator < Object.keys(this.photos).length)) {
        $('.item__photo_left').css('background-image', `url("${this.photos[parseInt(Object.keys(this.photos).length, 10) - 1]}")`);
        $('.inner_wrapper__gallery__inner__item_3').css('background-image', `url("${this.photos[parseInt(this.iterator, 10) - 1]}")`);
        $('.item__photo_right').css('background-image', `url("${this.photos[parseInt(this.iterator, 10)]}")`);
        this.is_left = false;
        this.is_start = true;
      }
    },
  },
  mounted() {
    $('.item__photo_right').css('background-image', `url("${this.photos[2]}")`);
    $('.inner_wrapper__gallery__inner__item_3').css('background-image', `url("${this.photos[1]}")`);
    $('.item__photo_left').css('background-image', `url("${this.photos[0]}")`);
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

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #555555;
}

::-webkit-scrollbar-thumb:hover {
  background: #555555;
}

.outer_wrapper{
    position: fixed;
    background-color: #f6f6f6;
    max-width: 70%;
    height: 80%;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
    overflow-y: scroll;

    @media (max-width: 767px) {
        max-width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .close_button{
        position: absolute;
        cursor: pointer;
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
    flex-direction: column;

    @media (max-width: 767px) {
        width: 100%;
        height: 100%;
        padding: 50px;
        display: flex;
    }

    .inner_wrapper__header{
      width: 87%;
      height: 180px;
      align-self: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      -webkit-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
      -moz-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
      box-shadow: 10px 10px 10px -11px rgba(0,0,0,0.75);
      margin-bottom: 20px;
    }

    .inner_wrapper__patch{
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 120px;
      right: 90px;
      width: 100px;
      height: 100px;
      border-radius: 50% 50%;
      background-color: #ffffff;
      -webkit-box-shadow: 5px 10px 10px -11px rgba(0,0,0,0.75);
      -moz-box-shadow: 5px 10px 10px -11px rgba(0,0,0,0.75);
      box-shadow: 5px 10px 10px -11px rgba(0,0,0,0.75);

      .patch{
          width: 50px;
          height: 50px;
      }
    }

    .inner_wrapper__name{
      width: 80%;
      align-self: center;
      font-weight: 600;
    }

    .inner_wrapper__box{
      width: 80%;
      align-self: center;
      margin-bottom: 20px;

      a{
        color: #000000;
      }

      a:active, a:hover, a:visited{
        color: #000000;
      }

      .inner_wrapper__box__item_title{
        font-size: 11px;
        border-bottom: 0.3px solid rgba(0, 0, 0, 0.5);
        align-self: center;
        margin-top: 15px;
        margin-bottom: 10px;
      }

      .inner_wrapper__box__item{
        font-size: 9px;
        align-self: center;
        padding: 2px 2px 2px 10px;
      }

      .inner_wrapper__box__item_video{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px 2px 2px 10px;
      }
    }

    .inner_wrapper__gallery{
      display: flex;
      width: 100%;
      height: 250px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .inner_wrapper__gallery__inner{
        width: 90%;
        height: 200px;
        display: grid;
        grid-template-columns: 10% 20% 20% 20% 20% 10%;
        grid-auto-rows: 200px;

        .inner_wrapper__gallery__inner__item_1{
            display: flex;
            justify-content: center;
            align-items: center;
            grid-column: 1/2;
            grid-row: 1;
        }

        .inner_wrapper__gallery__inner__item_2{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            grid-column: 2/4;
            grid-row: 1;

            .item__photo_left{
                width: 75%;
                height: 80%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 55% 70%;
                opacity: 0.8;
                -webkit-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
            }
        }

        .inner_wrapper__gallery__inner__item_3{
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 55% 70%;
            display: flex;
            align-items: center;
            grid-column: 3/5;
            grid-row: 1;
            z-index: 1;
            -webkit-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
        }

        .inner_wrapper__gallery__inner__item_4{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            grid-column: 4/6;
            grid-row: 1;

            .item__photo_right{
                width: 75%;
                height: 80%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 55% 70%;
                opacity: 0.8;
                -webkit-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 20px -11px rgba(0,0,0,0.75);
            }
        }

        .inner_wrapper__gallery__inner__item_5{
            display: flex;
            justify-content: center;
            align-items: center;
            grid-column: 6;
            grid-row: 1;
        }

        .marker {
            cursor: pointer;
        }
    }
}

</style>
