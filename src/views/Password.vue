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
            <h3 class="card-right-title">Please select a password</h3>
            <div class="signup-form">
              <form @submit.prevent="handleSubmitPassword">
                <div class="form-group-wrap">
                  <input
                    id="password1"
                    :type="visibility"
                    v-model="user_password.password1"
                    name="password1"
                    placeholder="Choose a password"
                    class="form-control-wrap"
                    required
                    minlength="4"
                  />

                  <span @click="showPassword" class="icon-eye-password"></span>
                </div>

                <div class="form-group-wrap">
                  <input
                    id="password2"
                    :type="visibility"
                    v-model="user_password.password2"
                    name="password2"
                    placeholder="Confirm password"
                    class="form-control-wrap"
                    required
                    minlength="4"
                  />

                  <span @click="showPassword" class="icon-eye-password"></span>
                </div>

                <div class="form-group-wrap" v-if="password_match">
                  <div class="confirmation-errors-email">
                    <span class="top-title"> The passwords do not match </span>
                  </div>
                </div>

                <div class="form-group-wrap">
                  <button class="btn-signup">
                    Sign up
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
  name: "Password",
  data() {
    return {
      user_password: {
        password1: null,
        password2: null,
      },
      visibility: "password",
      password_match: false,
    };
  },
  computed: mapState(["user"]),

  methods: {
    handleSubmitPassword: function() {
      console.log("password", this.user_password.password1);
      console.log("password", this.user_password.password2);

      /// add  better  validation

      if (this.user_password.password1 != this.user_password.password2) {
        this.password_match = true;
      } else {
        this.password_match = false;
        mixpanel.track('App', { category: "Common", label: "Add Password" } );
        userengage('event.Add Password'); 
        this.$store.dispatch("sendPassword", this.user_password.password1);
        // this.$router.push("/profile");
      }
    },

    showPassword: function() {
      let type = document.getElementById("password1").type;

      if (type === "password") {
        this.visibility = "text";
      } else {
        this.visibility = "password";
      }
    },
  },
};
</script>
