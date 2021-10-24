<style >
.thesidebar {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: -1px 4px 15px rgba(0, 0, 0, 0.15);
  height: 100%;
}

.sidebar-left {
  position: fixed;
}
.img-logo-sidebar {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.thesidebar .profile-image {
  height: 110px;
  width: 110px;
  border-radius: 50%;
}
.thesidebar .profile-name {
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #201e4f;
  margin-top: 15px;
  justify-content: center;
  font-family: "SofiaProBoldAz";
}

.menu-sidebar {
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;
}
.menu-sidebar .menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.menu-sidebar .menu-items .menu-link {
  cursor: pointer;
  color: rgba(197, 30, 5, 1);
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
}

.menu-sidebar .menu-items .menu-link-icon {
  width: 19px;
  height: 19px;
  margin-right: 15px;
}

.menu-link#search-page-link {
  cursor: pointer;
  color: #dbddee;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
}
</style>

<template>
  <div class="thesidebar">
    <div class="sidebar-left">
    <img src="../assets/NinjaLogo.png" class="img-logo-sidebar">
    <div class="sidebar"> 
          <img :src="user.user.profile_pic_url" class="profile-image">

      <div class="profile-name">
        {{user.user.full_name}}
      </div>
      
      </div>

      <div class="menu-sidebar">
          <div class="menu-items">
            <img src="../assets/profile_icon.png" class="menu-link-icon">
            <div class="menu-link">
              Profile
            </div>
          </div>
      </div>

      <div class="menu-sidebar" >
          <div class="menu-items">
            <img src="../assets/searchMenu_icon.png" class="menu-link-icon">
            <div  class="menu-link" id="search-page-link">
              Search
            </div>
          </div>
      </div>

       <div class="menu-sidebar" >
          <div class="menu-items" id="logout-link" >
            <img src="../assets/logout.png" class="menu-link-icon">
            <div  class="menu-link" @click="logout" >
              Log out
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import router from "../router.js";


export default {
  name: "thesideBar",
  props: {
    
  },
  data() {
    return {
     
    };
  },
  computed: mapState(["user"]),
  methods: {
    logout:function(){
      this.$store.commit("LOGOUT_PROFILE");
    }
  },
};
</script>
