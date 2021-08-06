<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="container mb-5">
        <h4>Breakfast</h4>
        <div class="parent">
          <div v-for="items in Breakfast" :key="items.id" v-on:click="foodDetails(items)" >
            <img :src="items.url" width="300px" height="300px" style="border-radius: 15px" />
            <h5>{{items.name}}</h5>
          </div>
        </div>

        <h4>Lunch</h4>
        <div class="parent">
          <div v-for="items in Lunch" :key="items.id" v-on:click="foodDetails(items)">
            <img :src="items.url" width="300px" height="300px" style="border-radius: 15px" />
            <h5>{{items.name}}</h5>
          </div>
        </div>

        <h4>Dinner</h4>
        <div class="parent">
          <div v-for="items in Dinner" :key="items.id"  v-on:click="foodDetails(items)">
            <img :src="items.url" width="300px" height="300px" style="border-radius: 15px" />
            <h5>{{items.name}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue"
export default {
  name: "Dashboard",
  components:{
    Header
  },
  computed: {
    Breakfast() {
      return this.$store.state.Breakfast;
    },
    Lunch() {
      return this.$store.state.Lunch;
    },
    Dinner() {
      return this.$store.state.Dinner;
    }
  },
  methods: {
    foodDetails(item) {
      this.$router.push({ name: "Details", params: item });
    },
  }
};
</script>

<style scoped>
.parent{
  display:grid;
  grid-template-columns: repeat(auto-fill , minmax(200px , auto));
}
img{
  width:5cm;
  height:5cm
}
h5{
  font-weight:bold
}
h4{
  font-weight:bold;
  color:dodgerblue;
  padding:20px 0px 20px 0px
}
@media only screen and (max-width : 600px){
  .parent{
  display:grid;
  grid-template-columns: repeat(auto-fill , 110px);
  justify-content: space-evenly;
}
img{
  width:2.5cm;
  height:2.5cm
}
h5{
  font-weight:bold;
  font-size:12px;
}
h4{
  font-weight:bold;
  color:dodgerblue;
  font-size:15px;
  margin-left:0.5cm;
  padding:10px
}
}
</style>