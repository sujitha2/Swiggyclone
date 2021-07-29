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
  <div>
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
  </div>
</template>

<script>
import{mapState} from 'vuex'
import Feedback from './Finalpage.vue'
export default {
    name:'ShoppingCart',
    components:{
        Feedback,
    },
    data(){
        return{
            details : this.$route.params,
            showPopup : false,
        }
    },
    computed: {
        ...mapState({
            cartItems: (state) => state.cartItems ,
        }),
        totalPrice(){
            let price = 0;
            this.$store.state.cartItems.map(el => { price += el ["quantity"] * el ["price"] });
            return price;
        },
    },
    methods:{
    foodDetails(item){
      this.$router.push({name: "food-details" , params: item});
    },
    add(){
      this.$store.dispatch("increase", this.details);
    },
    remove(){
      this.$store.dispatch("decrease", this.details);
    },
    }
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
</style>