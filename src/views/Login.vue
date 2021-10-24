<style>
.icon-eye-password {
  height: 25px;
  width: 25px;
  background: url(../assets/eye_password.png);
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  margin-left: -30px;
}
.forget_password{
  cursor: pointer;
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
          <div class="card-right-section">
            <h3 class="card-right-title">Please Enter your Account Details</h3>
            <div class="signup-form">
              <form @submit.prevent="handleSubmitLogin">
                <div class="form-group-wrap">
                  <input
                    id="username"
                    type="text"
                    v-model="user_login.username"
                    name="username"
                    placeholder="Enter your User Name "
                    class="form-control-wrap"
                    required
                  />

                  <!-- <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">
                    {{ errors.first("username") }}
                  </div> -->
                </div>

                <div class="form-group-wrap">
                  <input
                    id="password"
                    :type="visibility"
                    v-model="user_login.password"
                    name="password"
                    placeholder="Enter Your Password"
                    class="form-control-wrap"
                    required
                  />

                  <!-- <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">
                    {{ errors.first("username") }}
                  </div> -->

                  <span @click="showPassword" class="icon-eye-password"></span>
                </div>

                <div class="form-group-wrap" v-if="user.account.LoginFail">
                  <div class="confirmation-errors-email">
                    <span class="top-title"> The password or username are not correct  </span>
                     <a  @click="forgotPassword" class="forget_password"> Forgot your password ? </a>
                  </div>
                </div>

                <div class="form-group-wrap">
                  <button class="btn-signup">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      user_login: {
        password: null,
        username: null,
      },
      visibility: "password",
    };
  },
  computed: mapState(["user"]),

  methods: {
    handleSubmitLogin: function() {
      if (this.user_login.password && this.user_login.username) {
        let data = {
          username: this.user_login.username,
          password: this.user_login.password,
        };
        mixpanel.track('App', { category: "Common", label: "Login" } );
        userengage('event.Login'); 
        this.$store.dispatch("sendLogin", data);
      }
    },

    showPassword: function() {
      let type = document.getElementById("password").type;

      if (type === "password") {
        this.visibility = "text";
      } else {
        this.visibility = "password";
      }
    },
    forgotPassword:function() {
       if (this.user_login.username) {
        let shtrudel =this.user_login.username.charAt(0);

        if (shtrudel == "@") {
         this.user_login.username = this.user_login.username.slice(1);
        }

        this.$store.dispatch("forgotPassword", this.header_email_scraper);
     
      }
    },
  },
};
</script>
