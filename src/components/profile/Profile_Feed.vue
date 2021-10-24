<style>
.profile-feed {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-basis: auto;
  flex-wrap: wrap;
}

.other {
  height: 40px;
  border-bottom: 1px solid#680e01;
}

.other_posts {
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #680e01;
}

.insta-img {
}

.img-feed {
  width: 100%;
  height: auto;
  background: rgba(69, 15, 7, 0.3);
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.img-feed-card {
  display: flex;
  width: 350px;
  height:  350px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
}

.img-feed-card .img-feed-section {
  display: flex;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}
.img-feed-card .img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
  border-radius: 4px;
}

.img-feed-card .img-feed-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  align-content: center;
  width: 80%;
  justify-content: space-evenly;
  z-index: 33;
}

.img-feed-card .img-feed-info .img-feed-icons {
  display: flex;
  justify-content: center;
}

.img-feed-card .img-feed-info .img-feed-icon {
  display: flex;
  margin-right: 5px;
}

.img-feed-card .img-feed-info .img-feed-amount {
  display: flex;
  font-weight: bold;
  font-size: 18px;
  line-height: 129%;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #ffffff;
}
</style>


<template>

  <div class="">
    <div class="other col-md-12 col-xs-12">
      <span class="other_posts">Other posts:</span>
    </div>


    <div class="profile-feed">
      <div class="profile"  v-for="(img,index) in  this.user.profile_images" :key="index">

        <div v-if="index>2" class="col-md-4 col-xs-12">

          <div  class="img-feed-card">
            <img :src="'data:image/jpeg;base64,'+
                 img.post_pic_url" class="img-feed-section">
             <div class="img-overlay"></div>    
            <div class="img-feed-info">
              <div class="img-feed-icons">
                <img src="./../../assets/likes_icon.svg" class="img-feed-icon">
                <span class="img-feed-amount">{{getlikes_per_post(img.likes)}}</span>
              </div>
              <div class="img-feed-icons">
                <img src="./../../assets/replies_icon.svg" class="img-feed-icon">
                <span class="img-feed-amount">{{getreplies_per_post(img.replies)}}</span>
              </div>
              <div class="img-feed-icons">
                <img src="./../../assets/engaged_icon.svg" class="img-feed-icon">
                <span class="img-feed-amount">{{getengagement_rate(img.likes,img.replies)}} </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  getFormattedBigNumber,
  getEngagementRatePost,
  getFormattedMaxDecimalsNumber,
} from "../../format";

export default {
  name: "profile_feed",
  components: {},
  props: {},
  computed: mapState(["user"]),
  methods: {
    getlikes_per_post: function(likes) {
      return getFormattedBigNumber(likes);
    },
    getreplies_per_post: function(replies) {
      return getFormattedBigNumber(replies);
    },
    getengagement_rate: function(likes, replies) {
      return getEngagementRatePost(
        likes,
        replies,
       this.user.user.followers
      );
    },
  },
  data() {
    return {
      instagram_feed: [],
    };
  },
};
</script>
