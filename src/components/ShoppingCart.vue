<template>
  <div>
      <Header />
    <div>
      <div v-if="totalPrice !== 0" class="outer-container">
          <h4 class="fw-600">Cart</h4>
          <div v-show="totalPrice !== 0" class="row" style="width: 50%">
            <div class="d-flex">
              <ul class="outer-box" style="padding: 0">
                <li v-for="items in cartItems" :key="items.id" style="list-style: none;">
                  <div class="cart-items ">
                    <div><img :src="items.url"  /></div>
                    <div class="cart-details">
                    <h6 class="mt-15">{{items.name}}</h6>
                    <div class="d-flex mt-10">
                      <button v-on:click="removeItem(items)" class="fas fa-minus" type="button"></button>
                      <span class="cart-quantity mt--6">{{items.quantity}}</span>
                      <button v-on:click="addToCart(items)" class="fas fa-plus" type="button"></button>
                    </div>
                    <h6 class="mt-15">Rs.{{items.price * items.quantity}}</h6>
                    </div>
                  </div>
                  <div class="line"></div>
                </li>
                  <div class="price">Total Price : {{totalPrice}}</div>
              </ul>
            </div>
          </div>
          <button v-on:click="checkout" class="btn btn-primary" type="button">Checkout</button>
      </div>
      <Emptycart v-else />
      </div>
    </div>
</template>

<script>
import Emptycart from './Emptycart.vue'
import Header from './Header.vue'
export default {
  name: "Cart",
  data() {
    return {
      item: 0
    };
  },
  components:{
      Emptycart,
      Header
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
    removeItem(item) {
      this.$store.dispatch("removeItem", item);
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map(el => {
        price += el["quantity"] * el["price"];
      });
      return price;
    }
  }
};
</script>

<style scoped>
h4{
  font-weight: bold;
  color:dodgerblue
}
.outer-container{
  margin-left:16cm;
  margin-top:2cm;
}
.btn-primary{
  margin-left: 3cm;
}
.price{
  font-size:18px;
  padding:25px;
  font-weight: bold;
  justify-content: end;
}
.outer-box{
  border:1px solid black
}
img{
  height:80px;
  width:80px;
  border-radius: 50%
}
.cart-details{
  display:flex;
  flex-direction: row;
  padding:15px
}
h6{
  padding-left: 10px;
  padding-right: 10px;
}
.cart-quantity {
  display: inline-block;
  width: 46px;
  height: 28px;
  font-size:18px;
  border-radius: 2px;
  background-color: #fff;
  text-align: center;
}
.cart-items {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
}
.line {
  height: 1px;
  border-bottom: 1px solid black;
}
.fa-minus , .fa-plus{
  border-radius: 15%;
  height:25px;
  background:transparent;
  border:1px solid black;
  font-size:12px;
}
.mt-10 {
  margin-top: 10px;
}
.mt-15 {
  margin-top: 15px;
}
@media only screen and (min-width:300px)and (max-width:400px){
.outer-container{
  margin-left: 0.1cm;
  align-items:center
}
}
@media only screen and (min-width:410px)and (max-width:600px){
.outer-container{
  margin-left: 0.7cm;
  align-items:center
}
}
@media only screen and (min-width:500px)and (max-width:600px){
.outer-container{
  margin-left: 2.5cm;
  align-items:center
}
}
@media only screen and (min-width:700px)and (max-width:1050px){
.outer-container{
  margin-left: 5cm;
  align-items:center
}
}
</style>