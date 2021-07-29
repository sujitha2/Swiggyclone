<template>
<div>
  <Header></Header>
  </div>
  <div>
    <Welcome></Welcome>
  </div>
  <div>
    <Mainpage></Mainpage>
  </div>
</template>
<script>
import Welcome from './Welcome.vue'
import Mainpage from './Mainpage.vue'
import Header from './Header.vue'

export default {
  name : 'Swiggy',
  components:
  {
    Welcome,
    Mainpage,
    Header
  },
  }
</script>
<style scoped>

</style>
