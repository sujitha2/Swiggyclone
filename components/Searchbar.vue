<template>
  <link
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    rel="stylesheet"/>
  <div id="searchbar">
      <div class="fas fa-search">
      <input @click="showPopup = true" v-model="search" placeholder="Search"/>
</div>
</div>
    <div v-show="showPopup">
    <div v-for="item in filteredBreakfast" :key="item.id">
        <div>{{item.name}}</div>
    </div>
    <div v-for="items in filteredLunch" :key="items.id">
        <div>{{items.name}}</div>
    </div>
    <div v-for="itemss in filteredDinner" :key="itemss.id">
        <div>{{itemss.name}}</div>
    </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Search',
    data(){
        return{
            search : '',
            showPopup:false,
        }
    },
    computed:{
        ...mapState({
      breakfast: (state) => state.Breakfast ,
      lunch: (state) => state.Lunch,
      dinner: (state) => state.Dinner,
    }),
    filteredBreakfast(){
        return this.breakfast.filter( breakfast => breakfast.name.toLowerCase().trim().includes(this.search.toLowerCase().trim()))
    },
    filteredLunch(){
        return this.lunch.filter( lunch=> lunch.name.toLowerCase().trim().includes(this.search.toLowerCase().trim()))
    },
    filteredDinner(){
        return this.dinner.filter( dinner=> dinner.name.toLowerCase().trim().includes(this.search.toLowerCase().trim()))
    },
    },

}
</script>

<style scoped>
#searchbar{
    border: white solid 1.5px;
    background-color: white;
    padding:8px;
    margin-top: 7px;
}
input{
    border:none;
    outline:none;
    margin-left:9px;
    background-color:white;
    font-size:20px
}
.fa-search{
    color:rgb(0,0,49);
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
    color:rgb(0,0,49);
}
}

</style>