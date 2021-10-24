<style></style>

<template>
  <div class="main-wrap">
    <div class="signup-section col-md-12 col-xs-12">
      <div class="signup-card col-md-10 col-xs-12">
        <div class="card-left col-md-6 col-xs-12">
          <div class="card-left-content">
            <h1 class="card-left-title">NinjaOutreach</h1>
            <h2 class="card-left-subtitle">
              Claim your Ninja Outreach Creator account now!
            </h2>
          </div>
        </div>
        <div class="card-right col-md-6 col-xs-12">
          <div class="">
            <div class="card-right-section">
              <h3 class="card-right-title">
                  Reset Your Password
              </h3>
              <div class="signup-form">
                <form @submit.prevent="handleSubmitReset">
                  <div class="form-group-wrap">
                    <input
                      type="text"
                      v-model="user.account.username"
                      name="username"
                      placeholder="Enter your @instagram_username"
                      class="form-control-wrap"
                      required
                    />                  
                  </div>
                  <div
                    class="loader"
                    v-if="!this.user.account.UserExists.loader"
                  >
                    <span class="loader-title">
                      we are searching for your profile...
                    </span>
                    <vue-loaders-ball-spin-fade-loader
                      color="#c51e05"
                      scale="1"
                    ></vue-loaders-ball-spin-fade-loader>
                  </div>
                  <div
                    class="form-group-wrap"
                    v-if="!user.account.UserExists.notFound"
                  >
                    <div class="confirmation-errors-email">
                      <span class="top-title">
                        your username @{{ this.user.account.username }} <br />
                        not found in our system
                      </span>
                    </div>
                  </div>
                  <div class="form-group-wrap">
                    <button class="btn-signup">
                      Reset Your Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "../router.js";

export default {
  name: "ResetPassword",
  data() {
    return {
      showError: false,
      header_email_scraper: false,
    };
  },
  computed: mapState(["user"]),
  methods: {
    handleSubmitReset: function() {
      if (this.user.account.username) {
        let shtrudel = this.user.account.username.charAt(0);

        if (shtrudel == "@") {
          this.user.account.username = this.user.account.username.slice(1);
        }

        mixpanel.track("App", { category: "Common", label: "Reset Password" });
        userengage("event.Reset");
        this.$store.dispatch("sendSignup", this.header_email_scraper);
      }
    },
  },
};
</script>
