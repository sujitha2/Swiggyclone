<template>
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
      <h6>{{price}}</h6>
  </div>
  </div>
</template>

<script>
import{mapState} from 'vuex'
export default {
    name:'ShoppingCart',
    data(){
        return{
            details : this.$route.params
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
</style>