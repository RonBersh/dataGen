<style>
.cards-stats {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.card-stat {
  width: 230px;
  height: 100px;
  background: #ffffff;
  box-shadow: -1px 4px 15px rgba(54, 54, 54, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
}

.card-stat-title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  width: 100%;
  justify-content: center;
}

.card-stat-title .card-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.card-tilte-cat {
  display: flex;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 125.7%;
  color: #201e4f;
}

.card-stat-number {
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 43px;
  color: rgba(1, 96, 255, 1);
  margin-top: 5px;
  font-family: "SofiaProBoldAz";
}
</style>

<template>
  <div>
    <div class="cards-stats">
      <div class="card-stat">
        <div class="card-stat-title">
          <img src="../../assets/search_icon_blue.png" class="card-icon" />
          <span class="card-tilte-cat"> searches appearance </span>
        </div>
        <div class="card-stat-number">
          {{ user.profile_stats.search_apprenced }}
        </div>
      </div>

      <div class="card-stat">
        <div class="card-stat-title">
          <img src="../../assets/search_icon_blue.png" class="card-icon" />
          <span class="card-tilte-cat"> Ninja profile viewes </span>
        </div>
        <div class="card-stat-number">
          {{ user.profile_stats.profile_view }}
        </div>
      </div>

      <div class="card-stat">
        <div class="card-stat-title">
          <img src="../../assets/search_icon_blue.png" class="card-icon" />
          <span class="card-tilte-cat"> Ninja profile Clicked </span>
        </div>
        <div class="card-stat-number">
          {{ user.profile_stats.profile_click }}
        </div>
      </div>

      <div class="card-stat">
        <div class="card-stat-title">
          <img src="../../assets/search_icon_blue.png" class="card-icon" />
          <span class="card-tilte-cat"> Potential partnerships </span>
        </div>
        <div class="card-stat-number">
          {{ user.profile_stats.profile_partnership }}
        </div>
      </div>

      <div class="card-stat">
        <div class="card-stat-title">
          <img src="../../assets/search_icon_blue.png" class="card-icon" />
          <span class="card-tilte-cat"> peer ranking </span>
        </div>
        <div class="card-stat-number">
          {{ user.profile_stats.profile_peer }} / 500
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "profilestats",
  props: {},
  computed: mapState(["user"]),
};
</script>
