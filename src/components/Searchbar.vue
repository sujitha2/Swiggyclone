<template>
<div>
    <Header/>
</div>
  <link
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    rel="stylesheet"/>
  <div id="searchbar">
      <span class="line">
        <div class="fas fa-search"></div>
        <input  v-model="search" placeholder="Search for dishes....."/></span>
        <span class="fas fa-times" @click="exit"></span>
      <div>
              <li class="autocom" @click="goto(item)" v-for="item in filteredBreakfast" :key="item.id">{{item.name}}</li>
              <li class="autocom" @click="goto(item)" v-for="item in filteredLunch" :key="item.id">{{item.name}}</li>
              <li  class="autocom" @click="goto(item)" v-for="item in filteredDinner" :key="item.id">{{item.name}}</li>
      </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import {mapState} from 'vuex'
export default {
    name: 'Search',
    data(){
        return{
            search : '',
        }
    },
    components:{
        Header
    },
    methods:{
    goto(item) {
      this.$router.push({ name: "Details", params: item });
    },
    exit(){
        this.$router.push({name:'Swiggy'})
    }
    },
    computed:{
        ...mapState({
      breakfast: (state) => state.Breakfast ,
      lunch: (state) => state.Lunch,
      dinner: (state) => state.Dinner,
    }),
    filteredBreakfast(){
        if(this.search === ""){
            return ""
        }
        return this.breakfast.filter( breakfast => breakfast.name.toLowerCase().trim().includes(this.search.toLowerCase().trim()))
    },
    filteredLunch(){
         if(this.search === ""){
            return ""
        }
        return this.lunch.filter( lunch=> lunch.name.toLowerCase().trim().includes(this.search.toLowerCase().trim()))
    },
    filteredDinner(){
         if(this.search === ""){
            return ""
        }
        return this.dinner.filter( dinner=> dinner.name.toLowerCase().trim().includes(this.search.toLowerCase().trim()))
    },
    }
}
</script>

<style scoped>
.line {
  border: 1px solid black;
  padding:8px 12px
}
.fa-times{
    padding-left:10px;
    font-size:25px
}
li{
    list-style:none
}
#searchbar{
    border: none;
    background-color: white;
    padding:8px;
    margin:1cm 6cm 0cm 6cm;
}
input{
    border: none;
    outline:none;
    background-color:white;
    font-size:20px;
    font-weight: 550;
    align-items:center;
    padding-right:19cm
}
.fa-search{
    color:rgb(0,0,49);
    padding-right:10px
}
.autocom{
    padding:8px 12px;
} 
.autocom:hover{
    background:rgba(199, 197, 197, 0.4)
}
@media only screen and (max-width : 600px){
#searchbar{
    border: white solid 1.5px;
    background-color: white;
    margin-top: 7px;
}
input{
    border:none;
    outline:none;
    background-color:white;
}
.fa-search{
    font-size:13px;
    padding-right:3px
}
.fa-times{
    padding-left:3px;
    font-size:15px
}
#searchbar{
    border: none;
    background-color: white;
    padding:8px;
    margin:0.5cm 0cm 0cm 0cm;
}
input{
    border: none;
    outline:none;
    background-color:white;
    font-size:15px;
    font-weight: 550;
    align-items:center;
    padding-right:2.8cm
}
li{
    list-style:none;
    font-size: 12px;
}
}
@media only screen and (min-width:700px) and (max-width:1100px){
.line {
  border: 1px solid black;
  padding:8px 12px;
}
 #searchbar{
    border: none;
    background-color: white;
    padding:8px;
    margin:1cm 3cm 0cm 3cm;
}   
input{
    border: none;
    outline:none;
    background-color:white;
    font-size:20px;
    font-weight: 550;
    align-items:center;
    padding-right:1cm
}
.fa-search{
    font-size:20px;
    padding-right:10px
}
}
</style>