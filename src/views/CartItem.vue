<style>
.cart {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 10%;
  flex-direction: column;
}

.cart-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
}

.cart-list .title-cart {
  margin-top: 30px;
  margin-bottom: 50px;
  color: #585666;
}

.cart-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  width: 500px;
  border-bottom: 1px solid #e3e3e5;
  padding: 15px;
  cursor: pointer;
}

.description {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #585666;
}
.back-btn {
  background-color: #585666;
  cursor: pointer;
  width: 100px;
  color: white; 
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="col-12">
    <div class="container cart">
      <div class="cart-list">
        <div class="back-btn" @click="goBack()">back</div>
        <h2 class="h1 title-cart">{{ name }}</h2>
        <p class="description">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router.js";
import prodList from "../prodList.json";

export default {
  name: "cartitem",
  props: ["name", "description"],

  computed: {},
  methods: {
    goBack() {
      this.$router.push({ name: "Cart" });
    },
  },
  mounted() {},
};
</script>
