<template>
    <div>
    <Header></Header>
  </div>
     <link
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    rel="stylesheet"
  />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <div>
    <div class="whole">
      <h4 class="my-4 fw-900 d-blue">Breakfast</h4>
      <div class="d-grid">
      <div v-for="items in breakfast " :key="items.id">
      <img :src="items.url"/>
      <h5 class="fw-600 black">{{items.name}}</h5>
      <div class="box-300">
      <span class="fw-800 black">Rs : {{items.price}}/-</span>
      <span class="line">|</span>
      <span class="fw-700 black">Ratings  : {{items.rate}} <span class="fas fa-star"></span></span>
      </div>
      <div>
      <button class="btn btn-success"><button id="remove" class="fas fa-minus" @click="decrease()"></button>Add
      <button id="add" class="fas fa-plus" @click="increase()"></button></button>
      </div>
      </div>
      </div>

      <h4 class="my-4 fw-900 d-blue">Lunch</h4>
      <div class="d-grid">
      <div v-for="items in lunch" :key="items.id">
      <img :src="items.url"/>
      <h5 class="fw-600 black">{{items.name}}</h5>
      <div class="box-300">
      <span class="fw-800 black">Rs : {{items.price}}/-</span>
      <span class="line">|</span>
      <span class="fw-700 black">Ratings  : {{items.rate}} <span class="fas fa-star"></span></span>
      </div>
      <div>
      <button class="btn btn-success"><button id="remove" class="fas fa-minus" @click="decrease()">
      </button>Add<button id="add" class="fas fa-plus" @click="increase()"></button></button>
      </div>
      </div>
      </div>

      <h4 class="my-4 fw-900 d-blue">Dinner</h4>
      <div class="d-grid">
      <div v-for="items in dinner" :key="items.id">
      <img :src="items.url" />
      <h5 class="fw-600 black">{{items.name}}</h5>
      <div class="box-300">
      <span class="fw-800 black">Rs : {{items.price}}/-</span>
      <span class="line">|</span>
      <span class="fw-700 black">Ratings  : {{items.rate}}<span class="fas fa-star"></span></span>
      </div>
      <div>
      <button class="btn btn-success"><button id="remove" class="fas fa-minus" @click="decrease()"></button>Add
      <button id="add"  class="fas fa-plus" @click="increase()"></button></button>
      </div>
      </div>
      </div>
      </div>
      </div>
</template>

<script>
import Header from './Header.vue'
import {mapState} from 'vuex'
export default {
  name:"Hotelpage",
  components:{
    Header,
  },
  data(){
    return{
      showSignupPopup:false,
      details : this.$route.params
    }
  },
  computed:{
    ...mapState({
      breakfast: (state) => state.Breakfast ,
      lunch: (state) => state.Lunch,
      dinner: (state) => state.Dinner
    }),
  },
  methods:{
    foodDetails(item){
      this.$router.push({name: "food-details" , params: item});
    },
    increase(){
      this.$store.dispatch("increase" , this.details);
    },
    decrease(){
      this.$store.dispatch("decrease" , this.details);
    },
  },
}
</script>

<style scoped>
img{
  width:5cm;
  height:5cm
}
.line{
  color:black;
  font-size: 20px;
  font-weight: 900;
}
.d-grid{
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: center;
}
.btn-success{
  padding:6px;
  margin-bottom:1cm;
  margin-left:1.2cm;
}
#remove{
  border-color: transparent;
  background:transparent;
  padding: 0 8px 0 0 ;
  font-weight: bold;
  font-size:10px
}
#add{
  border-color: transparent;
  background:transparent;
  padding: 0 0px 0 8px ;
  font-weight: bold;
  font-size:10px
}
.fa-star{
  font-size:11px;
  color:orange;
}
.content{
  flex : 1;
  overflow-y :auto;
}
.fw-900{
  font-weight:800;
  font-size: 20px;
  padding-left: 30px;
}
.fw-600{
  font-weight:600;
  font-size: 17px;
}
.fw-800{
  font-weight:800;
  font-size: 14px;
  padding: 0px 20px 0 0px;
}
.fw-700{
  font-weight:800;
  font-size: 14px;
  padding: 0px 0px 0 20px;
}
.black{
  color:black
}
.d-blue{
  color:dodgerblue
}
.pointer{
  cursor:pointer
}
.box-300{
  padding: 20px 0 20px 0;
  margin-top: -15px;
}
.flex{
  display:flex;
  flex-direction: row;
  flex-flow: row wrap;
}
.whole{
  margin-left:50px;
}
@media only screen and (min-width: 300px) and (max-width: 600px){
  img{
    width:3cm;
    height: 3cm;
  }
  .line{
  color:black;
  font-size: 10px;
  font-weight: 900;
}
.d-grid{
  grid-template-columns: repeat(auto-fill, 150px);
  justify-content: space-evenly
}
.btn-success{
  margin-bottom:1cm;
  font-size: 10px;
  width:2cm;
  height:0.8cm;
  margin-left:0px
}
#remove{
  border-color: transparent;
  background:transparent;
  font-size: 8px;
}
#add{
  border-color: transparent;
  background:transparent;
  padding: 0 0px 0 10px ;
  font-size: 8px;
}
.fa-star{
  font-size:8px;
  color:orange;
}
.content{
  flex : 1;
  overflow-y :auto;
}
.fw-900{
  font-weight:800;
  font-size: 15px;
  padding-left: 0px;
}
.fw-600{
  font-weight:600;
  font-size: 14px;
}
.fw-800{
  font-weight:800;
  font-size: 10px;
  padding: 0px 3px 0 0px;
}
.fw-700{
  font-weight:800;
  font-size: 10px;
  padding: 0px 0px 0 3px;
}
.black{
  color:black
}
.d-blue{
  color:dodgerblue
}
.pointer{
  cursor:pointer
}
.box-300{
  padding: 10px 0 10px 0;
  margin-top: -15px;
}
.flex{
  display:flex;
}
}
</style>