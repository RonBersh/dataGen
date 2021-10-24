<style>
.hashtags_section {
  display: flex;
  align-items: center;
  align-content: center;
  /* margin-top: 50px;
  margin-bottom: 50px; */
}
.hashtag-card{
  padding-right: 10%;
}
.hashtags_section_img {
  display: flex;
}

.hashtags_section_img .img-commented {
  /* display: flex;
  height: 100%;
  width: 100%; */
}

.hashtags_section_comp {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hashtags_section_comp .creator_title {
  font-weight: bold;
  font-size: 30px;
  line-height: 31px;
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

.hashtags_section_comp .hashtags_list {
}

.creator_stats_comp .hashtags-amount {
  font-weight: 300;
  font-size: 18px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #680e01;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #e5691d;
  padding-top: 15px;
}

.creator_stats_comp .hashtags-save {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 30px;
}
</style>

<template>
  <div class="hashtags_section col-md-12 col-xs-12">
    <div class="creator_stats_comp col-md-6 col-xs-12">
      <div class="hashtag-card">
        <p class="creator_title">Hashtags</p>
        <div class="hashtags_list">
          <multiselect
            v-model="user.profile_top_hashtags"
            tag-placeholder="Add new #hashtag"
            placeholder="Add new #hashtag"
            :options="user.profile_hashtags"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
            @select="select_hashtags"
          >
          </multiselect>
        </div>

        <div class="hashtags-amount">
         Hashtags you love!
        </div>
        <div class="hashtags-save">
          <button v-if="editMode" class="btn-save" @click="update_hashtags">
            Save
          </button>
        </div>
      </div>
    </div>
    <div class="creator_stats_img col-md-6 col-xs-12">
      <!-- <img :src="'data:image/jpeg;base64,' + user.profile_images.data.highlights[1].post_pic_url" class="img-commented"> -->
      <Img_Highlight
        v-bind:imgUrl="
          'data:image/jpeg;base64,' + this.user.profile_images[2].post_pic_url
        "
        v-bind:amonut="
          getengagement_rate(
            this.user.profile_images[2].likes,
            this.user.profile_images[2].replies
          )
        "
        icon="engaged"
        title="Engagement Rate"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import { mapState } from "vuex";
import Multiselect from "vue-multiselect";

import {
  getFormattedBigNumber,
  getEngagementRateClass,
  getEngagementRatePost,
  getFormattedMaxDecimalsNumber,
} from "../../format";
import Img_Highlight from "@/components/profile/Img_Highlight.vue";

Vue.component("multiselect", Multiselect);

export default {
  name: "Profile_Hashtags",
  components: {
    Img_Highlight,
  },
  data() {
    return {
      idx: 2,
      editMode: false,
    };
  },
  computed: mapState(["user"]),
  methods: {
    getengagement_rate: function(likes, replies) {
      return getEngagementRatePost(likes, replies, this.user.user.followers);
    },

    select_hashtags(newTag) {
      let tag = newTag;
      this.editMode = true;
    },
    addTag(newTag) {
      let tag = "#" + newTag;
      console.log(tag);
      this.$store.commit("UPDATE_PROFILE_HASHTAGS", tag);
      mixpanel.track('Profile', { category: "Profile Stats", label: "Added hashtag" } );
      userengage('event.Added hashtag');
      this.editMode = true;
    },
    update_hashtags() {
      this.$store.dispatch("updateHashtags");
      mixpanel.track('Profile', { category: "Profile Stats", label: "Added hashtag" } );
      userengage('event.Added hashtag');
    },
  },
};
</script>
