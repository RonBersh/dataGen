<style>
.img-highlight-card {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: relative;
}

.img-highlight-card .img-highlight {
  display: flex;
  height: auto;
  width: 100%;
  object-fit: contain;
}

.img-highlight-card .img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
  border-radius: 4px;
}

.img-highlight-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  align-content: center;
  width: 80%;
  justify-content: center;
}

span.img-highlight-subtitle {
  font-weight: bold;
  font-size: 18px;
  line-height: 129%;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  font-family: "SofiaProBoldAz";
}

img.img-highlight-icon {
  display: flex;
  margin-right: 15px;
  margin-left: 15px;
}

span.img-highlight-amount {
  display: flex;
  font-weight: bold;
  font-size: 18px;
  line-height: 129%;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  font-family: "SofiaProBoldAz";
}
</style>

<template>
  <div class="img-highlight-card">
    <img :src="imgUrl" class="img-highlight" />
    <div class="img-overlay"></div>

    <div class="img-highlight-info">
      <span class="img-highlight-subtitle">{{ title }}</span>
      <img :src="resolve_icon_url(icon)" class="img-highlight-icon" />
      <span class="img-highlight-amount">{{ amonut }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import { getFormattedBigNumber, getEngagementRateClass } from "../../format";

export default {
  name: "Img_Highlight",
  props: ["imgUrl", "icon", "title", "amonut"],

  data() {
    return {};
  },
  computed: mapState(["user"]),
  methods: {
    resolve_icon_url: function(path) {
      let images = require.context("../../assets/", false, /\.png$|\.svg$/);
      return images("./" + path + "_icon.svg");
    },
  },
};
</script>
