<style scoped>
.page404 {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 10%;
  flex-direction: column;
}
.img404 {
  width: 100%;
  height: 200px;
}

.title404 {
  margin-top: 30px;
  margin-bottom: 30px;
}

.btn-cta {
  margin-top: 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 250px;
  height: 68px;
  background: -webkit-linear-gradient(94.23deg, #c51e05 0%, #e5691d 100%);
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
}
.btn-cta a {
  font-family: "SofiaProMediumAz";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 91%;
  color: #ffffff;
  text-decoration: none;
}
</style>

<template>
  <div class="col-12">
    <div class="container page404">
      <img src="../assets/page404.svg" class="img404" />
      <h1 class="h1 title404">OOPS! Something went wrong...</h1>

      <div class="btn-cta">
        <a  href="/landing-page" class="free-trial-btn">
          Go back home
        </a>
      </div>

       



    </div>
  </div>
</template>

<script>
import router from "../router.js";

export default {
  name: "page404",
  data() {
    return {};
  },
};
</script>
