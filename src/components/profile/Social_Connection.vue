<style>
.social-connection {
  display: flex;
  flex-direction: column;
}

.social-logo-wrapper {
  width: 50px;
  height: 50px;
  background: -webkit-linear-gradient(92.47deg, #ffd814 -51.05%, #c51e05 111.76%);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-logo-wrapper .social-logo-img-profile {
  display: flex;
  width: 35px;
  height: 35px;
}

.social-followers {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #680e01;
  margin-top: 5px;
  display: flex;
  justify-content: center;
 font-family: "SofiaProMediumAz";
}
</style>

<template>
  <div class="social-connection">
    <div class="social-logo-wrapper">
      <img
        :src="resolve_img_url(social_platforms)"
        class="social-logo-img-profile"
      />
    </div>

    <div class="social-followers">
      {{ getFollowers() }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getFormattedBigNumber } from "../../format";

export default {
  name: "Social_Connection",
  props: {
    social_platforms: String,
    followers: String,
  },
  data() {
    return {};
  },
  computed: mapState(["user"]),
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("../../assets/", false, /\.png$|\.svg$/);
      return images("./" + path + "_logo.svg");
    },

    getFollowers: function() {
      return getFormattedBigNumber(this.user.user.followers);
    },
  },
};
</script>
