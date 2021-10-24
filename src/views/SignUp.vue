<style>
.main-wrap {
}

.signup-section {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 600px;
  margin-top: 50px;
}

.signup-card {
  background: #ffffff;
  box-shadow: -3px 4px 54px 10px rgba(0, 0, 0, 0.09);
  border-radius: 6px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
}

.card-right-section {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.signup-card .card-left {
  background: url(../assets/register_hero.jpg) rgba(21, 22, 20, 0.57);
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-content: center;
}

.signup-card .card-left .card-left-content {
  margin-bottom: 50px;
  padding-left: 15px;
  padding-right: 15px;
}

.signup-card .card-left .card-left-title {
  color: #ffffff;
  font-size: 48px;
  font-weight: bold;
  font-family: "SofiaProBoldAz";
}

.signup-card .card-left .card-left-subtitle {
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
  font-size: 26px;
  line-height: 127%;
  text-align: center;
  color: #ffffff;
  font-family: "SofiaProBoldAz";
}

.signup-card .card-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.signup-card .card-right .card-right-title {
  font-family: "SofiaProBlackAz";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 107%;
  color: #000000;
  margin-bottom: 15px;
  margin-top: 30px;
}

.signup-card .card-right .signup-form {
  /* margin-top: 30px; */
}

.form-group-wrap {
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;
  justify-content: center;
}

.form-control-wrap {
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 107%;
  /* identical to box height, or 29px */
  color: #969696;
  width: 421px;
  height: 40px;
  text-align: center;
  padding: 10px 10px 10px 5px;
  border: none;
  outline: none;
  border-bottom: 1px solid #e5691d;
  margin-top: 15px;
  margin-bottom: 15px;
}
.form-control-wrap::placeholder {
  font-family: "SofiaProExtraLightAz";
}

button.btn-signup {
  background: -webkit-linear-gradient(94.23deg, #c51e05 0%, #e5691d 100%);
  border-radius: 4px;
  width: 100%;
  height: 60px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 91%;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "SofiaProMediumAz";
}

button.btn-check-account {
  background: -webkit-linear-gradient(94.23deg, #c51e05 0%, #e5691d 100%);
  border-radius: 4px;
  width: 400px;
  height: 60px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 91%;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "SofiaProMediumAz";
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.signup-card .card-right .card-right-title-email {
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 107%;
  color: #c51e05;
  margin-bottom: 30px;
}

.signup-card .card-right .confirmation-errors {
  display: flex;
  flex-direction: column;
}

.signup-card .card-right .confirmation-errors .top-title {
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 176.5%;
  /* identical to box height, or 53px */
  color: #e5691d;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.signup-card .card-right .confirmation-errors .middle-title {
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: normal;
  color: #000000;
  text-align: center;
  font-weight: 500;
  margin-top: 30px;
}

.signup-card .card-right .confirmation-errors .bottom-title {
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: normal;
  color: #000000;
  text-align: center;
  margin-top: 30px;
}

.loader {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin-bottom: 30px;
}
.loader-title {
  margin-bottom: 30px;
}

@media only screen and (max-width: 1024px) {
  .signup-card {
    flex-direction: column-reverse;
  }
  .signup-section {
    height: 1000px;
  }
  .form-group-wrap {
    justify-content: center;
  }
  .form-control-wrap {
    width: 250px;
  }
  button.btn-signup {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 250px;
    font-size: 18px;
  }
  button.btn-check-account {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 250px;
    font-size: 18px;
  }
  .card-right-section {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .signup-card .card-right .card-right-title {
    font-size: 18px;
  }
  .signup-card .card-right .card-right-title-email {
    font-size: 18px;
  }
  .signup-card .card-left {
    margin-bottom: 50px;
  }
  .signup-card .card-right .signup-form {
    margin-top: 0;
  }

  .signup-card .card-left .card-left-title {
    font-size: 30px;
  }
  .signup-card .card-left .card-left-subtitle {
    font-size: 18px;
  }
  .signup-card .card-right .confirmation-errors {
    margin-bottom: 15px;
  }
  .signup-card .card-right .confirmation-errors .top-title {
    font-size: 22px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .signup-card .card-right .confirmation-errors .middle-title {
    font-size: 18px;
  }
  .signup-card .card-right .confirmation-errors .bottom-title {
    font-size: 18px;
  }
}
@media only screen and (max-width: 480px) {
  .signup-card .card-left {
    /* background: url(../assets/register_hero_mobile.jpg) rgba(21, 22, 20, 0.57);
  background-repeat: no-repeat;
  background-blend-mode: multiply; */
    background-size: cover;
    height: 400px;
    width: 100%;
  }
  .signup-section {
    height: 100%;
  }

  .signup-card .card-right .card-right-title {
    margin-bottom: 10px;
  }
  .signup-card {
    margin-left: 5%;
    margin-right: 5%;
  }
  .form-control-wrap {
    font-size: 14px;
  }
}
</style>

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
          <div class="" v-if="user.account.UserExists.userExists">
            <div class="card-right-section">
              <h3 class="card-right-title">Sign Up</h3>
              <div class="signup-form">
                <form @submit.prevent="handleSubmitSignUp">
                  <div class="form-group-wrap">
                    <input
                      type="text"
                      v-model="user.account.username"
                      name="username"
                      placeholder="Enter your @instagram_username"
                      class="form-control-wrap"
                      required
                    />

                    <!-- <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">
                    {{ errors.first("username") }}
                  </div> -->
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
                      Sign up
                    </button>
                  </div>
                </form>
                <button class="btn-signup" style="margin-top:0;" @click="login">
                  Login
                </button>
              </div>
            </div>
          </div>
          <div
            class="confirmation-errors"
            v-if="!user.account.UserExists.userExists"
          >
            <span class="top-title">
              We can't find your email address
            </span>
            <span class="middle-title">
              It looks like you don’t have an email address linked to your
              Instagram account, so we can not verify that it's really you
            </span>
            <span class="bottom-title">
              please add an email address to your public Instagram profile and
              click the button below
            </span>
            <div class="form-group-wrap">
              <button class="btn-check-account" @click="email_scraper">
                Check your account
              </button>
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

import Vue from "vue";
import VueLoaders from "vue-loaders";
import "vue-loaders/dist/vue-loaders.css";

Vue.use(VueLoaders);

export default {
  name: "SignUp",
  data() {
    return {
      showError: false,
      header_email_scraper: false,
    };
  },
  computed: mapState(["user"]),
  methods: {
    handleSubmitSignUp: function() {
      if (this.user.account.username) {
        let shtrudel = this.user.account.username.charAt(0);

        if (shtrudel == "@") {
          this.user.account.username = this.user.account.username.slice(1);
        }

        try {
          mixpanel.track('App', { category: "Common", label: "Signup" } );
          userengage('event.Signup'); 
          this.$store.dispatch("sendSignup", this.header_email_scraper);
          this.showError = false;
        } catch (error) {
          this.showError = true;
        }
      }
    },
    login: function() {
      router.push({
        name: "Login",
      });
    },
    email_scraper: function() {
      this.user.account.UserExists.userExists = !this.user.account.UserExists
        .userExists;
      let header_email_scraper = true;
      this.$store.commit("UPDATE_EMAIL_SCARPER",header_email_scraper);
    },
  },
};
</script>
