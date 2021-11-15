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

input .checkbox-task :checked ~ .cart-item {
  text-decoration: line-through;
}

.cart-item .cart-index {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ff941a;
  width: 110px;
  border-right: 1px solid #e3e3e5;
  justify-content: space-evenly;
}

.cart-item .cart-name,
.cart-price {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #585666;
  display: flex;
  justify-content: center;
  width: 100%;
}

.cart-sum {
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-size: ;
}

.cart-add {
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  color: #ff941a;
}
.cart-edit {
  font-size: 10px;
  width: 100%;
}
.cart-form-add {
}
.cart-form-add input {
  overflow: visible;
  border: none;
  border-bottom: 1px solid;
  padding: 15px;
  margin: 15px;
  outline: none;
}

.cart-form-add textarea {
  overflow: visible;
  border: none;
  border-bottom: 1px solid;
  padding: 15px;
  margin: 15px;
  outline: none;
  width: 100%;
  max-height: 300px;
  height: 200px;
}

.cart-form-add .send-btn {
  display: flex;
  width: 100%;
  justify-content: end;
  margin-top: 30px;
  margin-bottom: 30px;
}
.cart-form-add .icon-send {
  background: url(../assets/Send.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.cart-form-add .error-form {
  display: flex;
  width: 100%;
  justify-content: center;
}

.cart-form-add .error-msg {
  color: red;
  font-weight: bold;
}

@media only screen and (max-width: 756px) {
  .cart-item {
    width: 100%;
  }
  .cart-item .cart-name, .cart-price{
      font-size:14px;
  }
}
</style>

<template>
  <div class="col-12">
    <div class="container cart">
      <div class="cart-list">
        <h1 class="h1 title-cart">Shopping List</h1>
        <div class="cart-item" v-for="(cart, id) in this.prod" :key="id">
          <div class="cart-index">
            {{ cart.id }}
          </div>
          <div class="cart-name">
            {{ cart.name }}
          </div>
          <div class="cart-price">{{ cart.price }} {{ currency }}</div>
          <div class="cart-edit" @click="editCart(cart.id)">Edit</div>
          <div class="cart-edit" @click="removeCart(cart.id)">Remove</div>
          <div class="cart-edit" @click="redirect(cart.name, cart.description)">
            Show More
          </div>
        </div>
        <div class="cart-sum">Total: {{ totalSumm }}</div>
      </div>

      <div class="cart-add" @click="showAddProd()">
        +
        <p>Add Product</p>
      </div>

      <div v-if="form.showForm" class="cart-form-add">
        <div class="col-12">
          <input required v-model="form.name" type="text" placeholder="Name" />
          <input
            required
            v-model="form.price"
            type="number"
            placeholder="Price"
          />
        </div>

        <div class="col-12">
          <textarea
            required
            v-model="form.description"
            placeholder="Description"
          />
        </div>

        <div v-if="!form.isValidForm" class="error-form">
          <p class="error-msg">The Fields Are Required!</p>
        </div>
        <div class="send-btn">
          <div class="icon-send" @click="addProd()"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router.js";
import prodList from "../prodList.json";
import CartItem from "../views/CartItem.vue";

export default {
  name: "cart",
  data() {
    return {
      prod: [],
      currency: "NIS",
      form: {
        name: "",
        price: null,
        description: "",
        isEditMode: false,
        isAddMode: false,
        isValidForm: true,
        showForm: false,
        editIndex: null,
      },
    };
  },
  computed: {
    totalSumm: function() {
      return this.prod.reduce(function(total, item) {
        return total + parseInt(item.price);
      }, 0);
    },
  },
  methods: {
    redirect(name, description) {
      this.$router.push({
        name: "CartItem",
        params: { name: name, description: description },
      });
    },
    showAddProd() {
      this.form.isAddMode = true;
      this.form.showForm = true;
      this.form.name = null;
      this.form.price = null;
      this.form.description = null;
    },
    addProd() {
      if (this.form.name && this.form.price && this.form.description) {
        this.form.isValidForm = true;
        console.log("form", this.form);

        //simulate post call to db to add new row or edit

        if (this.form.isAddMode) {
          this.add_prod_to_db();
        }

        if (this.form.isEditMode) {
          this.edit_prod_to_db();
        }

        this.form.showForm = false;
      } else {
        this.form.isValidForm = false;
      }
    },
    add_prod_to_db() {
      this.form.isEditMode = false;
      let index = this.prod[this.prod.length - 1].id + 1;
      this.prod.push({
        id: index,
        name: this.form.name,
        price: this.form.price,
        description: this.form.description,
      });
    },
    edit_prod_to_db() {
      this.form.isEditMode = true;
      this.form.isAddMode = false;
      let index = this.form.editIndex;
      this.prod[index].name = this.form.name;
      this.prod[index].price = this.form.price;
      this.prod[index].description = this.form.description;
    },

    taskCompleted(id) {
      console.log("id", id);
    },
    editCart(id) {
      this.form.showForm = true;
      this.form.isAddMode = false;
      console.log("id", id);
      let index = id - 1;
      this.form.isEditMode = true;
      this.form.editIndex = index;
      this.form.name = this.prod[index].name;
      this.form.price = this.prod[index].price;
      this.form.description = this.prod[index].description;
    },
    removeCart(id) {
      console.log("id", id);
      this.prod.splice(
        this.prod.findIndex((item) => item.id === id),
        1
      );
    },
  },
  mounted() {
    //simulate Api Get call to db to get all products  in the cart
    this.prod = prodList;
    console.log("prod", this.prod);
  },
};
</script>
