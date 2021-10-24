<style>
.description {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 30px;
}
.btn-save {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 250px;
  height: 45px;
  background: -webkit-linear-gradient(
    87.68deg,
    #ffd814 -17.11%,
    #c51e05 191.54%
  );
  border-radius: 4px;
  border: none;
  font-size: 18px;
  color: white;
  outline: 0 !important;
  cursor: pointer;
}
.btn-save-cat {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 150px;
  height: 45px;
  background: -webkit-linear-gradient(
    87.68deg,
    #ffd814 -17.11%,
    #c51e05 191.54%
  );
  border-radius: 4px;
  border: none;
  font-size: 18px;
  color: white;
  outline: 0 !important;
  cursor: pointer;
}
.description-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 15px;
}
.description-top .edit-description {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  cursor: pointer;
}

img.icon-edit {
  height: 15px;
  width: 15px;
  margin-right: 5px;
}
.description-top .edit-description .description-title {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 131.7%;
  display: flex;
  align-items: center;
  margin: 0;
  color: #680e01;
}

.description-top .description-characters {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #201e4f;
}

textarea.description-input {
  width: 80%;
  height: 120px;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: rgba(104, 14, 1, 0.5);
  border: none;
  background: #f3f4f9;
  border-radius: 3px;
  resize: none;
  padding: 15px;
}
textarea.description-input:focus {
  border: none;
  outline: 0;
}
</style>

<template>
  <div class="description">
    <div class="description-top">
      <div class="edit-description" @click="enterEditMode">
        <img src="../../assets/edit_icon.png" class="icon-edit" />
        <p class="description-title">Edit Description</p>
      </div>

      <p class="description-characters">
        {{ description_length }} / 150 characters
      </p>
    </div>

    <textarea
      :value="user.user.biography"
      @input="update_description"
      maxlength="150"
      type="textarea"
      class="description-input"
      :disabled="!editMode"
      v-bind:style="{
        color: edit_style.color,
        background: edit_style.background,
      }"
    ></textarea>
    <!-- <button v-if="editMode" class="btn-save" @click="save_profile_description">Save</button> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Profile_Description",
  props: {},
  data() {
    return {
      description_length: 0,
      editMode: false,
      timer: undefined,
      edit_style: {
        color: "rgba(104, 14, 1, 0.5);",
        background: "none",
      },
    };
  },
  computed: mapState(["user"]),
  methods: {
    update_description(e) {
      this.description_length = e.target.value.length;
      this.$store.commit("UPDATE_PROFILE_DESCRIPTION", e.target.value);

      //save the description after user stop typing for 2.5 sec
      clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        console.log("typing ended save desc ", e.target.value);
        this.$store.dispatch("updateDescription");
        mixpanel.track('Profile', { category: "Profile Info", label: "Edited description" } );
         userengage('event.Edited description'); 
      }, 2500);

    },
    enterEditMode() {
      this.editMode = true;
      this.edit_style = {
        color: "#201E4F",
        background: "#f3f4f9",
      };
    },
    save_profile_description(e) {
      // this.$store.commit("UPDATE_PROFILE_DESCRIPTION");
      this.$store.dispatch("updateDescription");
    },
  },
};
</script>
