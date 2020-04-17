<template>
  <div class="outer_wrapper">
    <div class="inner_wrapper">
      <div
        v-if="!backgroud_header.length"
        :style="defaultStyle"
        class="inner_wrapper__header"
      />
      <div
        v-if="backgroud_header.length"
        :style="style"
        class="inner_wrapper__header"
      />
      <div class="inner_wrapper__patch">
        <img
          v-if="photo !== null"
          :src="photo"
          class="patch"
        />
        <img
          v-if="photo === null"
          src="../assets/spaceX-black.svg"
          class="patch"
        />
      </div>
      <div class="inner_wrapper__name">{{ this.item.mission_name }}</div>
      <div class="inner_wrapper__box">
        <div class="inner_wrapper__box__item_title"><b>Launch data</b></div>
        <div
          class="inner_wrapper__box__item"
          v-if="this.item.launch_date_utc"
        >
          <b>Launch date: </b>{{ this.item.launch_date_utc }}
        </div>
        <div
          class="inner_wrapper__box__item"
          v-if="this.item.launch_site.site_name_long"
        >
          <b>Launch site name: </b>{{ this.item.launch_site.site_name_long }} ({{
            this.item.launch_site.site_name
          }})
        </div>
        <div
          class="inner_wrapper__box__item"
          v-if="this.item.launch_success"
        >
          <b>Launch success: </b>{{ this.item.launch_success ? "Yes" : "No" }}
        </div>
      </div>
      <div class="inner_wrapper__box">
        <div class="inner_wrapper__box__item_title"><b>Other data</b></div>
        <div
          class="inner_wrapper__box__item"
          v-if="this.item.upcoming"
        >
          <b>Upcoming: </b>{{ this.item.upcoming ? "Yes" : "No" }}
        </div>
        <div
          class="inner_wrapper__box__item"
          v-if="this.item.crew"
        >
          <b>Crew: </b>{{ this.item.crew ? "Yes" : "No" }}
        </div>
        <div
          class="inner_wrapper__box__item"
          v-if="this.item.static_fire_date_utc"
        >
          <b>Static fire date: </b>{{ this.item.static_fire_date_utc }}
        </div>
      </div>
      <div
        class="inner_wrapper__box"
        v-if="this.item.details"
      >
        <div class="inner_wrapper__box__item_title"><b>Details</b></div>
        <div class="inner_wrapper__box__item_details">{{ this.item.details }}</div>
      </div>
      <div class="inner_wrapper_timeline">
        <div class="inner_wrapper_timeline_title"><b>Timeline</b></div>
        <div class="inner_wrapper_timeline__item">
          <svg
            id="timeline"
            viewBox="0 0 560 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5C0 5.55228 0.447715 6 1 6H559C559.552 6 560 5.55228 560 5V5C560 4.44772 559.552 4 559 4H0.99999C0.447705 4 0 4.44772 0 5V5Z"
              fill="black"
            />
            <g
              class="timeline_marker"
              v-for="index in (0, parseInt(Object.keys(this.item.timeline).length))"
              :key="index"
              @mouseover="handleTimeline(index - 1)"
            >
              <circle
                :cx="parseInt(-10, 10) + (560 / parseInt(timeline_lenght)) * index - 1"
                cy="5"
                r="3.5"
                fill="white"
                stroke="black"
              />
              <circle
                :cx="parseInt(-10, 10) + (560 / parseInt(timeline_lenght)) * index - 1"
                cy="5"
                r="2"
                fill="black"
              />
            </g>
          </svg>
        </div>
        <div class="inner_wrapper_timeline_value">
          T+ 00:20:00
        </div>
        <div class="inner_wrapper_timeline_insert">
          CRS-20
        </div>
      </div>
      <div
        class="inner_wrapper__box"
        v-if="this.item.telemetry.flight_club"
      >
        <div class="inner_wrapper__box__item_title"><b>Telemetry</b></div>
        <div class="inner_wrapper__box__item">
          <b>Telemetry: </b><a
            :href="this.item.telemetry.flight_club"
            target="_blank"
          >{{
            this.item.telemetry.flight_club
          }}</a>
        </div>
      </div>
      <div class="inner_wrapper__box">
        <div class="inner_wrapper__box__item_title"><b>Rocket data</b></div>
        <div class="inner_wrapper__box__item">
          <b>Rocket name: </b>{{ this.item.rocket.rocket_name }}
        </div>
        <div class="inner_wrapper__box__item">
          <b>Rocket type: </b>{{ this.item.rocket.rocket_type }}
        </div>
        <div class="inner_wrapper__box__item_title"><b>First stage: </b></div>
        <div
          class="inner_wrapper__box__item__box"
          v-for="core in this.item.rocket.first_stage.cores"
          :key="core.core_serial"
        >
          <div class="inner_wrapper__box__item__box_title"><b>Cores</b></div>
          <div class="inner_wrapper__box__item"><b>Core serial: </b>{{ core.core_serial }}</div>
          <div class="inner_wrapper__box__item"><b>Flight: </b>{{ core.flight }}</div>
          <div class="inner_wrapper__box__item"><b>Block: </b>{{ core.block }}</div>
          <div class="inner_wrapper__box__item">
            <b>Gridfins: </b>{{ core.gridfins ? "Yes" : "No" }}
          </div>
          <div class="inner_wrapper__box__item"><b>Legs: </b>{{ core.legs ? "Yes" : "No" }}</div>
          <div class="inner_wrapper__box__item">
            <b>Reused: </b>{{ core.reused ? "Yes" : "No" }}
          </div>
          <div class="inner_wrapper__box__item">
            <b>Land success: </b>{{ core.land_success ? "Yes" : "No" }}
          </div>
          <div class="inner_wrapper__box__item">
            <b>Lading intent: </b>{{ core.landing_intent ? "Yes" : "No" }}
          </div>
          <div class="inner_wrapper__box__item"><b>Landing type: </b>{{ core.landing_type }}</div>
          <div class="inner_wrapper__box__item">
            <b>Landing vehicle: </b>{{ core.landing_vehicle }}
          </div>
        </div>
        <div class="inner_wrapper__box__item_title"><b>Second stage: </b></div>
        <div class="inner_wrapper__box__item">
          <b>Block: </b>{{ this.item.rocket.second_stage.block }}
        </div>
        <div
          class="inner_wrapper__box__item__box"
          v-for="payload in this.item.rocket.second_stage.payloads"
          :key="payload.payload_id"
        >
          <div class="inner_wrapper__box__item__box_title"><b>Payloads</b></div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.cap_serial"
          >
            <b>Cap serial: </b>{{ payload.cap_serial }}
          </div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.reused"
          >
            <b>Reused: </b>
            {{ payload.reused ? "Yes" : "No" }}
          </div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.customers"
          >
            <b>Customers: </b>
            <span
              v-for="customer in payload.customers"
              :key="customer"
            >
              {{ customer }}
            </span>
          </div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.nationality"
          >
            <b>Nationality: </b>{{ payload.nationality }}
          </div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.manufacturer"
          >
            <b>Manufacturer: </b>{{ payload.manufacturer }}
          </div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.payload_type"
          >
            <b>Payload type: </b>{{ payload.payload_type }}
          </div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.payload_mass_kg"
          >
            <b>Payload mass: </b>{{ payload.payload_mass_kg + " kg" }}
          </div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.orbit"
          >
            <b>Orbit: </b>{{ payload.orbit }}
          </div>
          <div
            class="inner_wrapper__box__item__box"
            v-if="payload.orbit_params"
          >
            <div class="inner_wrapper__box__item__box_title"><b>Orbit parameters</b></div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.cap_serial"
            >
              <b>Cap serial: </b>{{ payload.orbit_params.reference_system }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.reference_system"
            >
              <b>Reference_system: </b>{{ payload.orbit_params.reference_system }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.regime"
            >
              <b>Regime: </b>{{ payload.orbit_params.regime }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.longitude"
            >
              <b>Longitude: </b>{{ payload.orbit_params.longitude }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.semi_major_axis_km"
            >
              <b>Semi major axis: </b>{{ payload.orbit_params.semi_major_axis_km + " km" }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.eccentricity"
            >
              <b>Eccentricity: </b>{{ payload.orbit_params.eccentricity }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.periapsis_km"
            >
              <b>Periapsis: </b>{{ payload.orbit_params.periapsis_km + " km" }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.apoapsis_km"
            >
              <b>Apoapsis: </b>{{ payload.orbit_params.apoapsis_km + " km" }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.inclination_deg"
            >
              <b>Inclination: </b>{{ payload.orbit_params.inclination_deg }}&deg;
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.period_min"
            >
              <b>Period: </b>{{ payload.orbit_params.period_min }}&prime;
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.lifespan_years"
            >
              <b>Lifespan years: </b>{{ payload.orbit_params.lifespan_years }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.epoch"
            >
              <b>Epoch: </b>{{ payload.orbit_params.epoch }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.mean_motion"
            >
              <b>Mean motion: </b>{{ payload.orbit_params.mean_motion }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.raan"
            >
              <b>Raan: </b>{{ payload.orbit_params.raan }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.arg_of_pericenter"
            >
              <b>Arg of pericenter: </b>{{ payload.orbit_params.arg_of_pericenter }}
            </div>
            <div
              class="inner_wrapper__box__item"
              v-if="payload.orbit_params.mean_anomaly"
            >
              <b>Mean anomaly: </b>{{ payload.orbit_params.mean_anomaly }}
            </div>
          </div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.mass_returned_kg"
          >
            <b>Mass returned: </b>{{ payload.mass_returned_kg + " kg" }}
          </div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.flight_time_sec"
          >
            <b>Flight time: </b>{{ payload.flight_time_sec }}
          </div>
          <div
            class="inner_wrapper__box__item"
            v-if="payload.cargo_manifest"
          >
            <b>Cargo manifest: </b>{{ payload.cargo_manifest }}
          </div>
        </div>
        <div
          class="inner_wrapper__box"
          v-if="this.item.rocket.fairings"
        >
          <div class="inner_wrapper__box__item_title"><b>Fairings</b></div>
          <div class="inner_wrapper__box__item">
            <b>Recovered: </b>{{ this.item.rocket.fairings.recovered ? "Yes" : "No" }}
          </div>
          <div class="inner_wrapper__box__item">
            <b>Recovery attempt: </b>{{ this.item.rocket.fairings.recovery_attempt ? "Yes" : "No" }}
          </div>
          <div class="inner_wrapper__box__item">
            <b>Reused: </b>{{ this.item.rocket.fairings.reused ? "Yes" : "No" }}
          </div>
          <div class="inner_wrapper__box__item">
            <b>Ship: </b>{{ this.item.rocket.fairings.ship ? "Yes" : "No" }}
          </div>
        </div>
      </div>
      <div
        class="inner_wrapper__box"
        v-if="this.item.ships"
      >
        <div class="inner_wrapper__box__item_title"><b>Ships</b></div>
        <div
          class="inner_wrapper__box__items"
          v-for="ship in this.item.ships"
          :key="ship"
        >
          {{ ship }}
        </div>
      </div>
      <div
        class="inner_wrapper__gallery"
        v-if="this.photos"
      >
        <div class="inner_wrapper__gallery__inner_title"><b>Gallery</b></div>
        <div class="inner_wrapper__gallery__inner">
          <div
            class="inner_wrapper__gallery__inner__item_1"
            @click="handleClickLeft"
          >
            <img
              src="../assets/chevron-left.svg"
              class="marker"
            />
          </div>
          <div class="inner_wrapper__gallery__inner__item_2">
            <div class="item__photo_left"></div>
          </div>
          <div class="inner_wrapper__gallery__inner__item_3"></div>
          <div class="inner_wrapper__gallery__inner__item_4">
            <div class="item__photo_right"></div>
          </div>
          <div class="inner_wrapper__gallery__inner__item_5"></div>
        </div>
      </div>
      <div
        class="inner_wrapper__box"
        v-if="this.item.links.youtube_id"
      >
        <div class="inner_wrapper__box__item_title"><b>YouTube</b></div>
        <div class="inner_wrapper__box__item_video">
          <iframe
            class="inner_wrapper__box__item_video__frame"
            :src="'https://www.youtube.com/embed/' + this.item.links.youtube_id"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="inner_wrapper__box_end">
        <div class="inner_wrapper__box_end__item_title"><b>Links</b></div>
        <div
          class="inner_wrapper__box_end__item"
          v-if="this.item.links.reddit_campaign"
        >
          <b>Reddit campaing: </b><a
            :href="this.item.links.reddit_campaign"
            target="_blank"
          >{{
            this.item.links.reddit_campaign
          }}</a>
        </div>
        <div
          class="inner_wrapper__box_end__item"
          v-if="this.item.links.reddit_launch"
        >
          <b>Reddit launch: </b><a
            :href="this.item.links.reddit_launch"
            target="_blank"
          >{{
            this.item.links.reddit_launch
          }}</a>
        </div>
        <div
          class="inner_wrapper__box_end__item"
          v-if="this.item.links.reddit_recovery"
        >
          <b>Reddit recovery: </b><a
            :href="this.item.links.reddit_recovery"
            target="_blank"
          >{{
            this.item.links.reddit_recovery
          }}</a>
        </div>
        <div
          class="inner_wrapper__box_end__item"
          v-if="this.item.links.reddit_media"
        >
          <b>Reddit media: </b><a
            :href="this.item.links.reddit_media"
            target="_blank"
          >{{
            this.item.links.reddit_media
          }}</a>
        </div>
        <div
          class="inner_wrapper__box_end__item"
          v-if="this.item.links.presskit"
        >
          <b>Press kit: </b><a
            :href="this.item.links.presskit"
            target="_blank"
          >{{ this.item.links.presskit }}</a>
        </div>
        <div
          class="inner_wrapper__box_end__item"
          v-if="this.item.links.article_link"
        >
          <b>Article: </b><a
            :href="this.item.links.article_link"
            target="_blank"
          >{{
            this.item.links.article_link
          }}</a>
        </div>
        <div
          class="inner_wrapper__box_end__item"
          v-if="this.item.links.wikipedia"
        >
          <b>Wikipedia: </b><a
            :href="this.item.links.wikipedia"
            target="_blank"
          >{{ this.item.links.wikipedia }}</a>
        </div>
      </div>
    </div>
    <div
      class="close_button"
      @click="$emit('closeModal')"
    ></div>
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
      timeline_lenght: Object.keys(this.item.timeline).length,
      timeline_sorted_values: [],
      timeline_sorted_keys: [],
      timeline_keys: [],
      video_link: '',
      iterator: 0,
      is_left: false,
      is_start: false,
    };
  },
  methods: {
    handleClickLeft() {
      if (Object.keys(this.photos).length !== 0) {
        this.iterator += 1;
        if (this.is_start === true) {
          $('.item__photo_left').css('background-image', `url("${this.photos[0]}")`);
          $('.inner_wrapper__gallery__inner__item_3').css('background-image', `url("${this.photos[1]}")`);
          $('.item__photo_right').css('background-image', `url('${this.photos[2]}')`);
          this.is_start = false;
          this.iterator = 0;
        } else if (
          this.is_left === false
          && this.iterator < parseInt(Object.keys(this.photos).length, 10) - 2
        ) {
          $('.item__photo_left').css('background-image', `url("${this.photos[parseInt(this.iterator, 10)]}")`);
          $('.inner_wrapper__gallery__inner__item_3').css('background-image', `url("${this.photos[parseInt(this.iterator, 10) + 1]}")`);
          $('.item__photo_right').css('background-image', `url("${this.photos[parseInt(this.iterator, 10) + 2]}")`);
        } else if (this.iterator === parseInt(Object.keys(this.photos).length, 10) - 2) {
          $('.item__photo_left').css('background-image', `url("${this.photos[parseInt(Object.keys(this.photos).length, 10) - 2]}")`);
          $('.inner_wrapper__gallery__inner__item_3').css('background-image', `url("${this.photos[parseInt(Object.keys(this.photos).length, 10) - 1]}")`);
          $('.item__photo_right').css('background-image', `url("${this.photos[0]}")`);
          this.is_left = true;
          this.iterator = 0;
        } else if (this.is_left === true && this.iterator < Object.keys(this.photos).length) {
          $('.item__photo_left').css('background-image', `url("${this.photos[parseInt(Object.keys(this.photos).length, 10) - 1]}")`);
          $('.inner_wrapper__gallery__inner__item_3').css('background-image', `url("${this.photos[parseInt(this.iterator, 10) - 1]}")`);
          $('.item__photo_right').css('background-image', `url("${this.photos[parseInt(this.iterator, 10)]}")`);
          this.is_left = false;
          this.is_start = true;
        }
      }
    },
    timelineDateFormat(seconds) {
      const date = new Date(null);
      if (seconds < 0) {
        date.setSeconds(Math.abs(seconds));
        const result = date.toISOString().substr(11, 8);
        return `T- ${result}`;
      }
      date.setSeconds(seconds);
      const result = date.toISOString().substr(11, 8);
      return `T+ ${result}`;
    },
    sortTimelineObject() {
      this.timeline_sorted_values = Object.values(this.item.timeline).sort(this.compareTimelineValues);
      this.timeline_keys = Object.keys(this.item.timeline);
      for (let i = 0; i < this.timeline_lenght; i += 1) {
        for (let j = 0; j < this.timeline_lenght; j += 1) {
          if (this.timeline_sorted_values[i] === this.item.timeline[this.timeline_keys[j]]) {
            this.timeline_sorted_keys[i] = this.timeline_keys[j];
            this.timeline_keys.splice(j, 1);
          }
        }
      }
    },
    handleTimeline(index) {
      $('.inner_wrapper_timeline_value').text(this.timelineDateFormat(this.timeline_sorted_values[index]));
      $('.inner_wrapper_timeline_insert').text(
        this.timeline_sorted_keys[index] !== undefined
          ? this.timeline_sorted_keys[index].replace(/_/g, ' ') : 'undefined',
      ).css({ 'text-transform': 'capitalize' });
    },
    compareTimelineValues(a, b) {
      return a - b;
    },
  },
  mounted() {
    $('.item__photo_right').css('background-image', `url("${this.photos[2]}")`);
    $('.inner_wrapper__gallery__inner__item_3').css('background-image', `url("${this.photos[1]}")`);
    $('.item__photo_left').css('background-image', `url("${this.photos[0]}")`);
    this.sortTimelineObject();
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

.outer_wrapper {
  position: fixed;
  background-color: #f6f6f6;
  max-width: 70%;
  height: 80%;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
  overflow-y: scroll;

  @media (max-width: 767px) {
    max-width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .close_button {
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 30px;
  }
  .close_button::after,
  .close_button::before {
    position: absolute;
    content: "";
    width: 20px;
    height: 1px;
    display: block;
    background-color: #000000;
  }

  .close_button::before {
    transform: rotate(45deg);
  }

  .close_button::after {
    transform: rotate(-45deg);
  }
}

.inner_wrapper {
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    padding: 20px;
    padding-top: 30px;
    display: flex;
  }

  .inner_wrapper__header {
    width: 87%;
    height: 180px;
    align-self: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    -webkit-box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 10px -11px rgba(0, 0, 0, 0.75);
    margin-bottom: 20px;
  }

  .inner_wrapper__patch {
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
    -webkit-box-shadow: 5px 10px 10px -11px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 10px 10px -11px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 10px 10px -11px rgba(0, 0, 0, 0.75);

    .patch {
      width: 50px;
      height: 50px;
    }

    @media (max-width: 767px) {
      width: 50px;
      height: 50px;
      top: 40px;
      right: 30px;

      .patch {
        width: 25px;
        height: 25px;
      }
    }
  }

  .inner_wrapper__name {
    width: 80%;
    align-self: center;
    font-weight: 600;

    @media (max-width: 767px) {
      width: 90%;
    }
  }

  .inner_wrapper_timeline {
    width: 80%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 15px;
    margin-bottom: 10px;

    @media (max-width: 767px) {
      width: 100%;
      height: 50px;
    }

    .inner_wrapper_timeline_title {
      font-size: 11px;
      border-bottom: 0.3px solid rgba(0, 0, 0, 0.5);
    }

    .inner_wrapper_timeline__item {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      @media (max-width: 767px) {
        height: 30px;
      }

      #timeline {
        width: 100%;
        height: 30px;

        .timeline_marker {
          cursor: pointer;
        }
      }
    }

    .inner_wrapper_timeline_value {
      width: 100%;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      text-align: center;

      @media (max-width: 767px) {
        height: 20px;
        font-size: 12px;
        font-weight: 700;
      }
    }

    .inner_wrapper_timeline_insert {
      width: 100%;
      height: 50px;
      font-size: 9px;
      font-weight: 400;
      text-align: center;

      @media (max-width: 767px) {
        height: 20px;
        font-size: 7px;
        font-weight: 400;
      }
    }
  }

  .inner_wrapper__box {
    width: 80%;
    align-self: center;

    @media (max-width: 767px) {
      width: 100%;
    }

    a {
      color: #000000;
    }

    a:active,
    a:hover,
    a:visited {
      color: #000000;
    }

    .inner_wrapper__box__item_title {
      font-size: 11px;
      border-bottom: 0.3px solid rgba(0, 0, 0, 0.5);
      align-self: center;
      margin-top: 15px;
      margin-bottom: 10px;
    }

    .inner_wrapper__box__item_details {
      font-size: 9px;
      align-self: center;
      padding: 2px 2px 2px 10px;
      text-align: justify;
      line-break: 1px;
    }

    .inner_wrapper__box__item {
      font-size: 9px;
      align-self: center;
      padding: 2px 2px 2px 10px;
      word-wrap: break-word;
    }

    .inner_wrapper__box__items {
      font-size: 9px;
      align-self: center;
      padding: 2px 2px 2px 0px;
      float: left;

      &::after {
        content: ",";
      }
    }

    .inner_wrapper__box__items:nth-of-type(2) {
      font-size: 9px;
      align-self: center;
      padding: 2px 2px 2px 10px;
      float: left;
    }

    .inner_wrapper__box__items:last-of-type {
      font-size: 9px;
      align-self: center;
      padding: 2px 2px 2px 0px;
      float: left;

      &::after {
        content: "";
      }
    }

    .inner_wrapper__box__item_video {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px 2px 2px 10px;

      .inner_wrapper__box__item_video__frame {
        width: 560px;
        height: 315px;

        @media (max-width: 767px) {
          width: 300px;
          height: 200px;
        }
      }
    }
  }

  .inner_wrapper__box_end {
    width: 80%;
    align-self: center;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      width: 100%;
    }

    a {
      color: #000000;
    }

    a:active,
    a:hover,
    a:visited {
      color: #000000;
    }

    .inner_wrapper__box_end__item_title {
      font-size: 11px;
      border-bottom: 0.3px solid rgba(0, 0, 0, 0.5);
      align-self: center;
      margin-top: 15px;
      margin-bottom: 10px;
    }

    .inner_wrapper__box_end__item {
      font-size: 9px;
      align-self: center;
      padding: 2px 2px 2px 10px;
      word-wrap: break-word;
    }
  }

  .inner_wrapper__box__item__box {
    width: 80%;
    align-self: center;
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 5px;

    @media (max-width: 767px) {
      margin-bottom: 0px;
    }

    .inner_wrapper__box__item__box_title {
      font-size: 9px;
      border-bottom: 0.3px solid rgba(0, 0, 0, 0.5);
      align-self: center;
      margin-bottom: 5px;
    }
  }

  .inner_wrapper__gallery {
    display: flex;
    width: 100%;
    height: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
      width: 100%;
      margin-top: 15px;
    }
  }

  .inner_wrapper__gallery__inner_title {
    width: 80%;
    margin-bottom: 10px;
    font-size: 11px;
    border-bottom: 0.3px solid rgba(0, 0, 0, 0.5);

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .inner_wrapper__gallery__inner {
    width: 90%;
    height: 200px;
    display: grid;
    grid-template-columns: 10% 20% 20% 20% 20% 10%;
    grid-auto-rows: 200px;

    .inner_wrapper__gallery__inner__item_1 {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column: 1/2;
      grid-row: 1;
    }

    .inner_wrapper__gallery__inner__item_2 {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      grid-column: 2/4;
      grid-row: 1;

      .item__photo_left {
        width: 75%;
        height: 80%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 55% 70%;
        opacity: 0.8;
        -webkit-box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
      }
    }

    .inner_wrapper__gallery__inner__item_3 {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 55% 70%;
      display: flex;
      align-items: center;
      grid-column: 3/5;
      grid-row: 1;
      z-index: 1;
      -webkit-box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
    }

    .inner_wrapper__gallery__inner__item_4 {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      grid-column: 4/6;
      grid-row: 1;

      .item__photo_right {
        width: 75%;
        height: 80%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 55% 70%;
        opacity: 0.8;
        -webkit-box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 20px -11px rgba(0, 0, 0, 0.75);
      }
    }

    .inner_wrapper__gallery__inner__item_5 {
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
