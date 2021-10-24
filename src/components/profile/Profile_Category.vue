<style>
.profile-category {
  display: flex;
  width: 250px;
}

.profile-category .location-info {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 159.2%;
  display: flex;
  align-items: center;
  color: #680e01;
}

.profile-category .search-icon {
  display: flex;
  margin-right: 5px;
}
</style>

<template>
  <div>
    <div class="profile-category">
      <img src="../../assets/categories_icon.svg" class="search-icon" />

      <multiselect
        v-model="user.user.categories"
        tag-placeholder="category"
        placeholder="Add new category "
        :options="instagram_categories"
        :multiple="true"
        :taggable="true"
        @tag="addCategory"
        @select="selected"
        @remove="remove"
      ></multiselect>
    </div>
    <button v-if="editMode" class="btn-save-cat" @click="update_category">
      Save
    </button>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import { mapState } from "vuex";
import Multiselect from "vue-multiselect";

Vue.component("multiselect", Multiselect);

export default {
  name: "Profile_Category",
  props: {},
  data() {
    return {
      instagram_categories: [
        "Tourism",
        "Kids",
        "Real Estate",
        "Parties",
        "Music",
        "Babies",
        "Media",
        "Entertainment",
        "Fashion Modeling",
        "Spirituality",
        "Luxury",
        "TV",
        "Cinema",
        "Humanities",
        "Pets",
        "Parenting",
        "Social Media",
        "Tattoos",
        "Leisure",
        "Technology",
        "Marketing",
        "Vegan",
        "LGBT",
        "Basketball",
        "Surfing",
        "Motorcycles",
        "Toys",
        "Motivation",
        "Nutrition",
        "Photography",
        "Digital Marketing",
        "Bodybuilding",
        "Crossfit",
        "Dance",
        "Nature",
        "Home Decor and Improvement",
        "Event Planning",
        "Cars",
        "Clothes and Accessories",
        "Catering",
        "Bars and Restaurants",
        "Wellness and Nature",
        "Food Photography",
        "Mommy",
        "Design",
        "Running",
        "Racing",
        "Internet",
        "Drinks",
        "Gaming",
        "Beauty and Cosmetics",
        "Comedy",
        "Lifestyle",
        "Cooking",
        "Beauty Blogger",
        "Modeling",
        "Fitness",
        "Blogging",
        "Acting",
        "Fashion Blogger",
        "Art",
        "Fashion",
        "Fitness Models",
        "Hotels",
        "Performing Arts",
        "Handmade",
        "Food Blogger",
        "Public Relations",
        "Health",
        "Travel",
        "Writing",
        "Food",
        "Science",
        "Business and Economy",
        "Yoga",
        "Comics",
        "Entrepreneur",
        "Education",
        "Wedding",
        "Radio",
        "Sports",
        "Soccer",
      ],
      editMode: false,
    };
  },
  computed: mapState(["user"]),
  methods: {
    selected(cat) {
      this.editMode = true;
    },
    update_category(cat) {
      this.editMode = false;
      this.$store.dispatch("updateCategory");
    },
    addCategory(newCat) {
      const tag = newCat;
      this.instagram_categories.push(newCat);
      this.$store.commit("UPDATE_PROFILE_CATEGORY", newCat);
      this.editMode = true;
      this.$store.dispatch("updateCategory");
      mixpanel.track("Profile", {
        category: "Profile Info",
        label: "Added category",
      });
      userengage("event.Added category");
      // this.user.user.categories.push(newCat);
    },
    remove(catRemove) {
      this.$store.commit("REMOVE_CATEGORY", catRemove);
      this.$store.dispatch("updateCategory");
    },
  },
};
</script>
