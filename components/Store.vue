<template>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <div>
      <h3 v-for="i in todos" :key="i">{{i.id}}) {{i.name}}</h3>
      <div>Count - {{count}}</div>
      <button class="btn btn-primary" @click="increment(2)">+</button>
  </div>
</template>

<script>
export default {
    name:'Store',
    computed:{
        todos(){
            return this.$store.getters.todos
        },
        count(){
            return this.$store.state.count
        }
    },
    methods:{
        increment(payload){
            // return this.$store.commit('increment')
            return this.$store.dispatch("increment",payload)
        }
    }
}
</script>

<style>
</style>