<template>
  <link
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
  <div class="cart-body">
      <div class="cart-items">
          <div v-for="items in cartItems" :key="items.id">
              <div class="flex">
              <h2>{{items.name}}</h2>
              </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Cart',
    methods:{
        cartItems(){
            return this.$store.state.cartItems ;
        }
    }
}
</script>

<style scoped>
.cart-body{
    border: 2px solid green;
    padding: 40px;
}
.cart-items{
    border: 2px solid red;
    padding: 40px;
}
.flex{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>