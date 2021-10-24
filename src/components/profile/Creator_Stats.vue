<style>
.creator_stats {
  display: flex;
  align-items: center;
  align-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
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
   font-family: "SofiaProBoldAz";
}

.creator_stats_comp .creator_cards {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.creator_stats_comp .creator_cards .creator_card {
  display: flex;
  flex-direction: column;
}
.creator_stats_comp .creator_cards .creator_card .creator_card_amount {
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
   font-family: "SofiaProBoldAz";
}

.creator_stats_comp .creator_cards .creator_card .creator_card_title {
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #680e01;
  border-top: 1px solid #e5691d;
  padding-top: 15px;
  justify-content: center;
}
</style>

<template>
    
    <div class="creator_stats col-md-12">
       <div class="creator_stats_img col-md-6 col-xs-12">
            <Img_Highlight v-bind:imgUrl="'data:image/jpeg;base64,'+this.user.profile_images[1].post_pic_url" 
            v-bind:amonut="getreplies_per_img(this.user.profile_images[1].replies)" icon="replies" title="Most commented post" 
            />
        </div>
        <div class="creator_stats_comp col-md-6 col-xs-12">
            <p class="creator_title">Creator’s Stats: </p>
            <div class="creator_cards">
                <div class="creator_card">
                         <span class="creator_card_amount"> {{getlikes_per_post()}} </span>
                         <span class="creator_card_title"> Avg likes<br> per post </span>
                </div>
                <div class="creator_card">
                         <span class="creator_card_amount"> {{getreplies_per_post()}} </span>
                         <span class="creator_card_title"> Avg replies <br> per post </span>
                </div>
                <div class="creator_card">
                         <span class="creator_card_amount"> {{getengagement_rate()}} </span>
                         <span class="creator_card_title"> Engagement <br> rate </span>
                </div>
            </div>
           
        </div>
        
    </div>
</template>

<script>

import { mapState } from "vuex";
import { getFormattedBigNumber,getEngagementRateClass } from "../../format";
import Img_Highlight from "@/components/profile/Img_Highlight.vue";

export default {
  name: "Creator_Stats",
  components: {
    Img_Highlight,
  },
  data() {
    return {
      idx: 1,
    };
  },
  computed: mapState(["user"]),
  methods: {
    getlikes_per_post: function() {
      return getFormattedBigNumber(this.user.user.likes_per_post);
    },
    getreplies_per_post: function() {
      return getFormattedBigNumber(this.user.user.replies_per_post);
    },
     getreplies_per_img: function(img) {
      return getFormattedBigNumber(img);
    },
    getengagement_rate: function() {
       return getEngagementRateClass(this.user.user.followers,this.user.user.engagement_rate).name;
    },
  },
};
</script>
