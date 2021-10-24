<style>
.confirmation-errors-email {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #fd0000;
  margin-top: 30px;
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SofiaProBlackAz";
  flex-direction: column;
}
@media only screen and (max-width: 1024px) {
  .confirmation-errors-email {
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
          <div>
            <div class="card-right-section">
              <p class="card-right-title">
                We sent you an Email with a confirmation Code to
              </p>
              <p class="card-right-title-email">
                {{ user.account.emailEncrypt }}
              </p>
              <p class="card-right-title">
                check it out!
              </p>

              <div class="signup-form">
                <form @submit.prevent="handleConfirmation">
                  <div class="form-group-wrap">
                    <input
                      type="text"
                      v-model="confirmation.confirmation_code"
                      name="confirmation"
                      placeholder="Enter confirmation Code"
                      class="form-control-wrap"
                      required
                    />
                  </div>

                  <div
                    class="form-group-wrap"
                    v-if="!user.account.hasConfirmation"
                  >
                    <div class="confirmation-errors-email">
                      <span class="top-title">
                        wrong code check your email address and try again
                      </span>
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SignUp",
  data() {
    return {
      confirmation: {
        confirmation_code: "",
        isExsist: true,
      },
    };
  },
  computed: mapState(["user"]),

  methods: {
    handleConfirmation: function() {
      if (this.confirmation.confirmation_code) {
        console.log("confirmation_code", this.confirmation.confirmation_code);
        mixpanel.track('App', { category: "Common", label: "Email_confirmation" } );
        userengage('event.Email_confirmation'); 

        this.$store.dispatch("sendConfirmation", [
          this.confirmation.confirmation_code,
        ]);
        //  this.$router.push("/add-password");
      }
    },
  },
};
</script>
