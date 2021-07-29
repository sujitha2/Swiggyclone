<template>
  <div v-for="item in mapState" :key="item.id">
      <h1>Welcome</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Search',
    data(){
        return{
            search : ' ',
        }
    },
    computed:{
        ...mapState({
      breakfast: (state) => state.Breakfast ,
      lunch: (state) => state.Lunch,
      dinner: (state) => state.Dinner
    }),
    filtered(){
        return this.mapState.filter(mapState => mapState.name.includes(this.search))
    }
    }
}
</script>

<style>

</style>