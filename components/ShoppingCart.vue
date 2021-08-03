<template>
  <link
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
  <div>
  <div v-if="totalPrice !== 0">
      <h3>Cart</h3>
          <ul style="list-style-type:none" class="ul">
              <li v-for="item in cartItems" :key="item.id" class="li">
                  <div class="row">
                      <img :src="item.url">
                      <h6>{{item.name}}</h6>
                      <div class="buttons">
                      <button @click="remove()">-</button>
                      <span>{{item.quantity}}</span>
                      <button @click="add()">+</button>
                      </div>
                      <h6>{{item.price}}</h6>
                  </div> 
              </li>
          </ul>
  <div>
      <h6>{{totalPrice}}</h6>
  </div>
  <button class="btn btn-primary" @click="showPopup = true">Checkout</button>
  <button class="btn btn-primary" @click="showPopup = false">Close</button>
  <Feedback id="Feedback" v-show="showPopup"></Feedback>
  </div>
 <Emptycart v-else />
  </div>
</template>

<script>
import Feedback from './Finalpage.vue'
import Emptycart from './Emptycart.vue'
export default {
    name:'ShoppingCart',
    components:{
        Feedback,
        Emptycart
    },
    data(){
        return{
            details : this.$route.params,
            showPopup : false,
        }
    },
    computed: {
        cartItems(){
            return this.$store.state.cartItems ;
        }
    },
    methods:{
    foodDetails(item){
      this.$router.push({name: "food-details" , params: item});
    },
    add(){
      this.$store.dispatch("increase", this.details);
      console.log(this.$store.state.cartItems)
    },
    remove(){
      this.$store.dispatch("decrease", this.details);
    },
    totalPrice(){
        const totalprice = this.$store.state.cartItems.reduce((acc,item) => {
            acc += item["price"] * item["quantity"];
            return acc;
        }, 0);
        console.log(totalprice);
        },
    },
}
</script>

<style scoped>
.ul{
    border:2px grey solid;
    padding:20px
}
.li{
    border:2px red solid;
    padding:20px
}
#Feedback{
    margin:0 10cm 0 10cm;
}
.fa-shopping-cart{
    font-size: 120px;
    background-image: linear-gradient(to bottom,rgb(23, 216, 216),darkcyan);
    background-clip: text;
    color:transparent;
    padding:0 0 20px 0;
}
.fa-tired{
    color:orangered
}
#empty{
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin-top:5cm;
}
</style>