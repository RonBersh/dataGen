<style>
.snackbar-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
#snackbar {
  visibility: hidden;
  min-width: 250px;
  width: 250px;
  height: 50px;
  background-color: #00af5b;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  outline: 0 !important;
  text-align: center;
  z-index: 1;
  bottom: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
#snackbar.hide {
  visibility: hidden;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
<template>
  <div class="snackbar-section">
    <div id="snackbar" v-bind:class="user.account.hasSnackBar">
      {{ text }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "snackbar",

  props: {},
  data() {
    return {
      text: "your profile has been updated",
    };
  },
  computed: mapState(["user"]),
  methods: {},
};
</script>
