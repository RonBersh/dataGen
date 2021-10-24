<style>




</style>



<template>

<div class="main-section">

    <div class="main-section-div">
         <!-- <Profile_Stats/>  -->
         <Steps/>
         <EditProfile/>
         <snackbar></snackbar>
    </div>  
</div>


</template>



<script>
// @ is an alias to /src
import Profile_Stats from "@/components/profile/Profile_Stats.vue";
import Steps from "@/components/profile/Steps.vue";
import EditProfile from "@/components/EditProfile.vue";
import snackbar from "@/components/profile/Snackbar.vue";




export default {
  name: "mainView",

  props: {},

  components: {
    Profile_Stats,
    Steps,
    EditProfile,
    snackbar,
  },

  methods: {},
};
</script>
