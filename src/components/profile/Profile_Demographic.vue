<style>
.Followers_information {
  display: flex;
  align-items: center;
  align-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.creator_stats_info {
  padding-right: 10%;
}

.creator_stats_img {
  display: flex;
  justify-content: center;
}

.creator_stats_img .img-commented {
  display: flex;
  background: rgba(69, 15, 7, 0.3);
  border-radius: 4px;
  width: 100%;
}

.creator_stats_comp {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.creator_stats_comp .creator_title {
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #e5691d;
  /* background-image: -webkit-linear-gradient(45deg, #c51e05, #e5691d); */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.creator_stats_comp .followers-cards {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.creator_stats_comp .followers-cards .creator_card {
  display: flex;
  flex-direction: column;
}

.creator_stats_comp .followers-cards .creator_card .creator_card_amount {
  font-weight: bold;
  font-size: 30px;
  line-height: 31px;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;

  background-color: #ffffff;
  background-image: -webkit-linear-gradient(45deg, #c51e05, #e5691d);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.creator_stats_comp .followers-cards .creator_card .creator_card_title {
  font-weight: 300;
  font-size: 28px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #680e01;
  border-top: 1px solid #e5691d;
  padding-top: 15px;
}

.followers-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  margin-top: 50px;
}
.followers-information .followers-graph {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
}
.followers-information .followers-graph .followers-progress {
  background: #f3f4f9;
  box-shadow: inset 0px 2px 4px -2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: flex;
  width: 100%;
  height: 20px;
  padding: 0;
}
.followers-information .followers-graph .followers-progress .progress-bar {
  background: -webkit-linear-gradient(94.23deg, #c51e05 0%, #e5691d 100%);
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
}
.followers-information .followers-graph .followers-graph-country {
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 300;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: #680e01;
  padding: 0;
  text-transform: capitalize;
}
.disclaimer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  color: #680e01;
  font-weight: 300;
  font-size: 22px;
  margin-top: 30px;
}
</style>

<template>
  <div class="Followers_information col-md-12  col-xs-12">
    <div class="creator_stats_comp col-md-6 col-xs-12 ">
      <div class="creator_stats_info">
        <p class="creator_title">Followers information</p>
        <div class="followers-cards">
          <div class="creator_card">
            <span class="creator_card_amount">
              {{ user.follower_information.avg_age }}
            </span>
            <span class="creator_card_title"> Avg age </span>
          </div>
          <div class="creator_card">
            <span class="creator_card_amount">
              {{ user.follower_information.female_percentage }} %
            </span>
            <span class="creator_card_title"> Female </span>
          </div>
          <div class="creator_card">
            <span class="creator_card_amount">
              {{ user.follower_information.male_percentage }} %
            </span>
            <span class="creator_card_title"> Male </span>
          </div>
        </div>

        <div
          class="followers-information"
          v-for="(info, index) in this.user.follower_information.countries"
          :key="index"
        >
          <div class="followers-graph">
            <span class="followers-graph-country col-4">
              {{ index }}
            </span>
            <b-progress
              class="followers-progress col-8"
              :value="info"
              :max="100"
              show-value
            >
            </b-progress>
          </div>
        </div>
        <span class="disclaimer" v-if="this.user.follower_information.isDisclaimer">
          *Please note that in case follower information is not available we
          provide 'default' Instagram statistics
        </span>
      </div>
    </div>

    <div class="creator_stats_img col-md-6 col-xs-12">
      <Img_Highlight
        v-bind:imgUrl="
          'data:image/jpeg;base64,' + this.user.profile_images[0].post_pic_url
        "
        v-bind:amonut="getlikes_per_img(this.user.profile_images[0].likes)"
        icon="likes"
        title="Most liked post"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getFormattedBigNumber, getEngagementRateClass } from "../../format";
import Img_Highlight from "@/components/profile/Img_Highlight.vue";
import { BProgress } from "bootstrap-vue";

export default {
  name: "Profile_Demographic",
  components: {
    Img_Highlight,
  },
  data() {
    return {
      idx: 3,
    };
  },
  computed: mapState(["user"]),
  methods: {
    getlikes_per_post: function() {
      return getFormattedBigNumber(this.user.user.likes_per_post);
    },
    getlikes_per_img: function(img) {
      return getFormattedBigNumber(img);
    },
    getreplies_per_post: function() {
      return getFormattedBigNumber(this.user.user.replies_per_post);
    },
    getengagement_rate: function() {
      return getEngagementRateClass(
        this.user.user.followers,
        this.user.user.engagement_rate
      ).name;
    },
    getPercent: function(num) {
      return num + 30;
    },
  },
};
</script>
