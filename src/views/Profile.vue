<style>
.profile-page {
  display: flex;
  padding-left: 0px;
  padding-right: 0px;
}
.sidebar-section {
  display: flex;
  justify-content: center;
  background: #ffffff;
  box-shadow: -1px 4px 15px rgba(0, 0, 0, 0.15);
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-section {
  display: flex;

  background: #f3f4f9;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 3%;
  padding-right: 3%;
}

.main-section-div {
  width: 100%;
}

.col-md-12 {
  padding: 0 !important;
}
.col-md-10 {
  padding: 0 !important;
}
.col-md-2 {
  padding: 0 !important;
}

@media only screen and (max-width: 480px) {
  .profile-page {
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    flex-direction: column;
  }
  .thesidebar {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .main-section {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .sidebar-left {
    position: relative;
  }
  .img-logo-sidebar {
    margin-bottom: 15px;
  }
  .menu-sidebar {
    margin-top: 15px;
  }
  .profile-strengh{
    justify-content:center;
    align-items:center;
    align-content: center;
  }
  .profile-strengh .profile-strengh-title {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .steps-complete {
    height: 150px;
  }
  .steps-complete .step .step-title {
    font-size: 12px;
    line-height:normal;
  }
  .steps-bottom .steps-bottom-title {
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 15px;
    text-align: center;
    justify-content: center;
  }

  .top-profile-info {
    flex-direction: column;
  }
  img.top-profile-info-img {
    width: 100%;
    height: 100%;
  }
  .top-profile-info-left{
    margin-bottom: 30px;
  }
  .top-profile-info-right .profile_userName {
    font-size: 18px;
    line-height:normal;
    text-align: center;
    justify-content: center;
  }
  .description-top {
    flex-direction: column;
    height: 70px;
  }
  textarea.description-input {
    width: 100%;
  }
  .edit-location-category {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  .profile-location,
  .profile-category {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .creator_stats_info {
    padding-right: 0%;
  }
  .creator_stats {
    flex-direction: column-reverse;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .Followers_information {
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .creator_stats_comp .followers-cards .creator_card .creator_card_amount {
    font-size: 18px;
    line-height:normal;
  }
  .creator_stats_comp .followers-cards .creator_card .creator_card_title {
    font-size: 18px;
    line-height:normal;
  }
  .followers-information .followers-graph .followers-graph-country {
    font-size: 14px;
    line-height:normal;
  }
  .img-highlight-card {
    margin-top: 30px;
  }
  .img-highlight-info {
    flex-direction: column;
  }
  span.img-highlight-subtitle {
    margin-bottom: 15px;
  }
  .creator_stats_comp .creator_title{
    font-size: 26px;
  }
  .creator_stats_comp .creator_cards .creator_card .creator_card_amount {
    font-size: 18px;
    line-height:normal;
  }
  .creator_stats_comp .creator_cards .creator_card .creator_card_title {
    font-size: 14px;
    line-height:normal;
  }
  .hashtags_section {
    flex-direction: column;
  }
  .hashtag-card {
    padding-right: 0;
  }
  .creator_stats_comp .hashtags-save {
    margin-top: 15px;
  }
  .other_posts {
    margin-top: 30px;
    text-align: center;
    justify-content: center;
  }
  .img-feed-card{
    width:300px;
    height:300px;
  }
  .img-feed-card .img-feed-info .img-feed-amount{
    font-size: 14px;
    line-height:normal;
  }
  .creator_stats_comp .hashtags-amount{
    padding-top: 30px;
  }
}
</style>

<template>
  <div class="home">
    <div class="profile-page col-md-12">
      <div class="col-md-2 col-xs-12">
        <TheSideBar />
      </div>
      <div class="col-md-10 col-xs-12">
        <MainView />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheSideBar from "@/components/TheSideBar.vue";
import MainView from "@/components/MainView.vue";
import axios from "axios";

export default {
  name: "profile",

  data() {
    return {
      customerlist: [],
      selectedCustomer: "",
    };
  },
  components: {
    TheSideBar,
    MainView,
  },

  mounted() {
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getProfileHashtags");
    this.$store.dispatch("getProfileImages");
    this.$store.dispatch("getProfile_Follower_information");
  },
};
</script>
