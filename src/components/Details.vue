<template>
  <div>
      <Header />
    </div>
    <div class="food-details">
        <div class="container mb-5">
          <h4 class="my-4 fw-600">Add Item to cart</h4>
          <div class="d-grid ">
            <div  style="cursor: pointer">
              <img :src="details.url" style="border-radius: 15px" />
              <div><button class="btn btn-success"><button id="remove" class="fas fa-minus" @click="removeItem()"></button> Add
               <button id="add" class="fas fa-plus" @click="addToCart()"></button></button></div>
            </div>
            <div class="details" style="cursor: pointer">
              <h5 class="my-4 fw-600">Name: {{details.name}}</h5>
              <h5 class="my-4 fw-600">Price: {{details.price}}</h5>
              <h5 class="my-4 fw-600">Description: {{details.desc}}</h5>
              <h5 class="my-4 fw-600">Rating <span class="fas fa-star"></span> : {{details.rate}} </h5>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: "Details",
  components:{
      Header
  },
  data() {
    return {
      details: this.$route.params
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.details);
    },
    removeItem() {
      this.$store.dispatch("removeItem", this.details);
    }
  },

};
</script>

<style scoped>
.food-details-outer {
  flex-direction: column;
  height: 100vh;
}
.fw-600 {
  font-weight: 600;
}
img{
  height:7cm;
  width:7cm
}
.d-grid{
  grid-template-columns: repeat(auto-fill,minmax(300px , auto));
}
.btn-success{
  margin-top:1cm;
  margin-left:2cm;
  font-size:16px
}
.fa-star{
  color:gold;
  font-size:18px
}
.fa-plus , .fa-minus {
  background:transparent;
  border:none;
  color:white;
  padding:10px;
  font-size:10px
}
.fa-plus:hover , .fa-minus:hover{
  border:1px solid black
}

@media only screen and (max-width:500px){
.details{
    justify-items:center;
    margin-left:0cm;
    margin-top:1cm;
}
h5{
    font-size:15px
}
img{
  height:4cm;
  width:4cm
}
.btn-success{
  margin-top:1cm;
  margin-left:0cm;
  font-size:12px;

}
}
</style>