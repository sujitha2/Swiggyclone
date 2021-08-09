<template>
    <link
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    rel="stylesheet"/>
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"/>
<div class="title">
<div class="logo">
 <div id="a"><img id="logo" @click="swiggy"  src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"></div>
 </div>
 <div class="parent">
 <div id="a">
   <div id="search" @click="search">
  <span id="searchimg" class="fas fa-search"></span>
  <span id="searchname">Search</span>
  </div>
 </div>
  <div id="a">  
    <div @click="cart()" id="cart">
    <span class="fas fa-shopping-cart" ></span>
    <span class="cart-count">{{cartItemCount}}</span>
    </div>
  </div>
    <div id="a">
    <div id="offer">
    <span id="offerimg" class="fas fa-percent"></span>
    <span  id="offername">Offers</span>
    </div>
    </div>
  <Signup id="signup" v-show="showPopup" ></Signup>
  <div id="a"><div class="child" @click="showPopup = true" >{{ signup }}</div></div>
</div>
</div>
</template>
<script>
import Signup from './Signup.vue'
export default {
  name : 'Swiggy',
    methods: {
    cart(){
      this.$router.push({name: 'ShoppingCart'})
    },
     search(){
      this.$router.push({name: 'Searchbar'})
    },
    swiggy(){
       this.$router.push({name: 'Swiggy'})
    }
    },
    props:["names"],
  data(){
    return{
      showPopup: false,
      signup:' Signup ',

    }
    },
    computed:{
    cartItemCount(){
      return this.$store.state.cartItemCount;
    }
  },
  components:
  {
    Signup,
  },
  }
</script>
<style scoped>
#searchname{
    font-size:18px;
    color:white
}
#offername{
    font-size:18px;   
}
.title{
  background: rgb(0,0,49);
  padding:20px 20px;
  display:flex;
  flex-direction: row;
}
.logo{
 flex-basis:60%;
}
.parent{
  display:flex;
  flex-direction: row;
  flex-flow:row wrap;
  flex-basis:40%;
  justify-content: space-evenly;
  align-self: auto;
}
.child{
  color:white;
  background: rgb(0,0,49);
  margin-top : 0.4cm;
  font-size:18px;
}
#a{
  cursor:pointer;
}
#logo{
  height:1.5cm;
  width:1.5cm;
  margin-left:1cm;
}
#searchimg{
  font-size:17px;
  color:white
}
#offerimg{
  font-size:16px
}
#cart{
    color:white;
    margin-top : 0.4cm;
}
#search{
  margin-top : 0.4cm;
}
#offer{
    color:white;
    margin-top : 0.4cm;
}
.fa-shopping-cart{
  font-size:30px;
  color:skyblue;
}
.cart-count{
  font-size:15px;
  color:floralwhite;
  padding: 0 5px;
  background-color: white;
  border-radius: 50%;
  color:black;
}
#signup{
  box-sizing: border-box;
  -webkit-box-sizing:border-box;
  position:absolute;
  border:1px rgb(182, 181, 181) solid;
  box-shadow: 3px 3px rgba(136, 134, 134,0.3);
  background-image: linear-gradient(to bottom,rgb(248, 147, 24),rgb(245, 167, 22));
  height:fit-content;
  width:600px;
  margin-top: 3.5cm;
  margin-left:-25cm;
}
@media only screen and (max-width: 500px) {
  #searchname{
    font-size:12px
  }
#offername{
    font-size:12px;   
}
.title{
  background: rgb(0,0,49);
  padding:20px 20px;
  display:flex;
  flex-direction: row;
}
.logo{
  flex-basis:35%
}
.parent{
  display:flex;
  flex-direction: row;
  flex-flow:row wrap;
  flex-basis:65%;
  justify-content: space-evenly;
}
.child{
  color:white;
  background: rgb(0,0,49);
  margin-top : 0.31cm;
  font-size:12px;
}
#a{
  cursor:pointer;
}
#logo{
  height:1cm;
  width:1cm;
  margin-left:0.5cm;
}
#searchimg{
  font-size:12px
}
#offerimg{
  font-size:12px
}
#cart{
    color:white;
    margin-top : 0.2cm;
}
#offer{
    color:white;
    margin-top : 0.2cm;
}
#search{
  margin-top : 0.2cm;
}
.fa-shopping-cart{
  font-size:15px;
  color:skyblue;
}
.cart-count{
  font-size:8px;
  color:floralwhite;
  padding: 0 4px;
  background-color: white;
  border-radius: 50%;
  color:black;
}
#signup{
  box-sizing: border-box;
  -webkit-box-sizing:border-box;
  position:absolute;
  border:1px rgb(182, 181, 181) solid;
  box-shadow: 3px 3px rgba(136, 134, 134,0.3);
  background-image: linear-gradient(to bottom,rgb(248, 147, 24),rgb(245, 167, 22));
  height:fit-content;
  width:300px;
  margin-top: 2cm;
  margin-left:-3.5cm;
}
}
@media only screen and (min-width:510px) and (max-width: 800px) {
   #searchname{
    font-size:18px;
    color:white
}
#offername{
    font-size:18px;   
}
.title{
  background: rgb(0,0,49);
  padding:20px 20px;
  display:flex;
  flex-direction: row;
}
.logo{
 flex-basis:40%;
}
.parent{
  display:flex;
  flex-direction: row;
  flex-flow:row wrap;
  flex-basis:60%;
  justify-content: space-evenly;
}
.child{
  color:white;
  background: rgb(0,0,49);
  margin-top : 0.25cm;
  font-size:18px;
}
#a{
  cursor:pointer;
}
#logo{
  height:1cm;
  width:1cm;
  margin-left:0.5cm;
}
#searchimg{
  font-size:12px;
  color:white
}
#offerimg{
  font-size:12px
}
#search{
  margin-top : 0.4cm;
}
#cart{
    color:white;
    margin-top : 0.2cm;
}
#offer{
    color:white;
    margin-top : 0.2cm;
}
#search{
  color:white;
  margin-top : 0.2cm;
}
.fa-shopping-cart{
  font-size:21px;
  color:skyblue;
}
.cart-count{
  font-size:8px;
  color:floralwhite;
  padding: 0 4px;
  background-color: white;
  border-radius: 50%;
  color:black;
}
#signup{
  box-sizing: border-box;
  -webkit-box-sizing:border-box;
  position:absolute;
  border:1px rgb(182, 181, 181) solid;
  box-shadow: 3px 3px rgba(136, 134, 134,0.3);
  background-image: linear-gradient(to bottom,rgb(248, 147, 24),rgb(245, 167, 22));
  height:fit-content;
  width:600px;
  margin-top: 2cm;
  margin-left:-8cm;
}
}
</style>
