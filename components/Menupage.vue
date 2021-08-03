<template>
<div>
    <Header></Header>
</div>
<div>
    <Hotelpage></Hotelpage>
</div>
  
</template>

<script>
import Header from './Header.vue'
import Hotelpage from './Hotelpage.vue'
export default {
    name:'Menupage',
    components:{
        Header,
        Hotelpage
    }

}
</script>

<style>

</style>