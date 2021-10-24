<style>
.edit-profile {
  height: auto;
  background: #ffffff;
  box-shadow: 4px -2px 35px -9px rgba(32, 30, 79, 0.15);
  border-radius: 3px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  padding: 5%;
  display: flex;
  flex-direction: column;
}
.top-profile-info {
  display: flex;
  align-items: top;
  align-content: top;
}
img.top-profile-info-img {
  width: 420px;
  height: 420px;
  background: rgba(69, 15, 7, 0.3);
  border-radius: 4px;
  display: flex;
}
.top-profile-info-right {
  display: flex;
  flex-direction: column;
}
.top-profile-info-left {
  display: flex;
}

.top-profile-info-right .profile_userName {
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  line-height: 81px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  background-color: #e5691d;
  /* background-image: -webkit-linear-gradient(45deg, #c51e05, #e5691d); */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-family: "SofiaProBlackAz";
}

.top-profile-info-right .social-platforms {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}

.top-profile-info-right .edit-location-category {
  display: flex;
  justify-content: space-between;
}
.loader-images {
  height: 200px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.loader-title-images {
  margin-bottom: 70px;
  font-weight: bold;
  font-size: 30px;
}
</style>

<template>
  <div class="edit-profile">
    <div class="top-profile-info col-md-12 col-xs-12">
      <div class="top-profile-info-left col-md-6 col-xs-12">
        <img :src="user.user.profile_pic_url_hd" class="top-profile-info-img" />
      </div>

      <div class="top-profile-info-right col-md-6 col-xs-12">
        <div class="profile_userName">@{{ user.user.username }}</div>

        <div class="social-platforms">
          <Social_Connection social_platforms="instagram" />
          <!-- <Social_Connection social_platforms="instagram"/>
           <Social_Connection social_platforms="instagram"/>
           <Social_Connection social_platforms="instagram"/> -->
        </div>

        <Profile_Description />

        <div class="edit-location-category">
          <Profile_Location />
          <Profile_Category />
        </div>
      </div>
    </div>

    <div class="" v-if="this.user.profile_images.length > 0">
      <Profile_Demographic />
      <Creator_Stats />
      <Profile_Hashtags />
      <Profile_Feed />
    </div>
    <div class="loader-images" v-if="this.user.profile_images.length === 0">
      <span class="loader-title-images">
        we are searching for your profile images ...
      </span>
      <vue-loaders-ball-spin-fade-loader
        color="#c51e05"
        scale="2"
      ></vue-loaders-ball-spin-fade-loader>
    </div>
  </div>
</template>

<script>
import Profile_Feed from "@/components/profile/Profile_Feed.vue";
import Profile_Description from "@/components/profile/Profile_Description.vue";
import Social_Connection from "@/components/profile/Social_Connection.vue";
import Profile_Location from "@/components/profile/Profile_Location.vue";
import Profile_Category from "@/components/profile/Profile_Category.vue";
import Creator_Stats from "@/components/profile/Creator_Stats.vue";
import Profile_Hashtags from "@/components/profile/Profile_Hashtags.vue";
import Profile_Demographic from "@/components/profile/Profile_Demographic.vue";
import Vue from "vue";
import VueLoaders from "vue-loaders";
import "vue-loaders/dist/vue-loaders.css";

Vue.use(VueLoaders);
import { mapState } from "vuex";

export default {
  name: "editprofile",
  components: {
    Profile_Feed,
    Profile_Description,
    Social_Connection,
    Profile_Location,
    Profile_Category,
    Creator_Stats,
    Profile_Hashtags,
    Profile_Demographic,
  },
  props: {},
  data() {
    return {};
  },
  computed: mapState(["user"]),
};
</script>
