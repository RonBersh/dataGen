<style>
.steps-complete {
  background: #ffffff;
  box-shadow: -1px 4px 15px rgba(54, 54, 54, 0.08);
  border-radius: 3px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-right: 10%;
  padding-left: 10%;
  padding-top: 40px;
  padding-bottom: 40px;
}

.profile-strengh {
  display: flex;
  flex-direction: column;
}

.profile-strengh .profile-strengh-title {
  font-weight: 900;
  font-size: 28px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #201e4f;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "SofiaProBlackAz";
}

.profile-strengh .profile-strengh-section {
  display: flex;
}

.profile-strengh-section {
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #201e4f;
  font-family: "SofiaProMediumAz";
}

.profile-strengh-power {
  /* color: red; */
  margin-left: 5px;
  font-family: "SofiaProBoldAz";
}

.steps-bottom .steps-bottom-title {
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #201e4f;
  margin-top: 50px;
  padding-top: 50px;
}

.steps-complete .step {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  border-top: 0.5px solid #201e4f;
}

.steps-complete .step img {
  display: flex;
  margin-top: -5px;
  height: 15px;
  width: 15px;
  object-fit: contain;
}

.steps-complete .step .step-title {
  display: flex;
  margin-top: 10px;
}
</style>

<template>
  <div>
    <div class="profile-strengh">
      <h2 class="profile-strengh-title">My Profile</h2>
      <div class="profile-strengh-section">
        <div class="profile-strengh-text">
          Profile Strength:
        </div>
        <div class="profile-strengh-power">
          {{
            getProfileStrengh(
              user.user.biography,
              user.user.location_country,
              user.user.categories.length,
              user.profile_hashtags.length
            )
          }}
        </div>
      </div>
    </div>
    <div class="steps-complete">
      <div class="step">
        <img
          :src="resolve_icon_url(user.steps_progress.profile_description)"
          class="img-step-icon"
        />
        <div class="step-title">Add Description</div>
      </div>
      <div class="step">
        <img
          :src="resolve_icon_url(user.steps_progress.profile_location)"
          class="img-step-icon"
        />
        <div class="step-title">Add Location</div>
      </div>
      <div class="step">
        <img
          :src="resolve_icon_url(user.steps_progress.profile_categories)"
          class="img-step-icon"
        />
        <div class="step-title">Choose Categories</div>
      </div>
      <div class="step">
        <img
          :src="resolve_icon_url(user.steps_progress.profile_hashtags)"
          class="img-step-icon"
        />
        <div class="step-title">Add #Hashtags</div>
      </div>
    </div>

    <div class="steps-bottom">
      <span class="steps-bottom-title"> This is how brands will see you:</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "steps",
  props: {},
  data() {
    return {
      profile_strengh: "Low",
      icon_done: "corrent",
      icon_not_done: "ellipse",
      color: "green",
    };
  },
  computed: mapState(["user"]),
  computedColor: function() {
    return this.color;
  },
  methods: {
    resolve_icon_url: function(isComplete) {
      var path = "corrent";
      if (!isComplete) {
        path = "ellipse";
      }
      let images = require.context("../../assets/", false, /\.png$|\.svg$/);
      return images("./" + path + "_icon.svg");
    },
    changeColor: function(color) {
      return color;
    },
    getProfileStrengh: function(desc, location, categories, hashtags) {
      let score = 0;
      let strength = "Low";
      if (desc != undefined) {
        score = score + 25;
      }
      if (desc != location) {
        score = score + 25;
      }
      if (categories > 0) {
        score = score + 25;
      }
      if (hashtags > 0) {
        score = score + 25;
      }

      if (score >= 0 && score <= 33) {
        strength = "Low";
        this.color = "red";
      }
      if ((score) => 33 && score <= 66) {
        strength = "Medium";
        this.color = "yellow";
      }
      if (score > 66) {
        strength = "Good";
        this.color = "green";
      }
      return strength;
    },
  },
};
</script>
