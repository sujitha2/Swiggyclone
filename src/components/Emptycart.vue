<template>
<div>
    <Header></Header>
</div>
<div id="empty">
      <div class="fas fa-shopping-cart"></div>
      <h2>OOPS ! Your cart is empty <div class="far fa-tired"></div></h2>
      <h4>Go to the homepage and order some more items</h4>
 </div>
     <link
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    rel="stylesheet"/>
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"/>
</template>

<script>
export default {
}
</script>
<style scoped>
.fa-shopping-cart{
    font-size: 120px;
    background-image: linear-gradient(to bottom,rgb(23, 216, 216),darkcyan);
    background-clip: text;
    color:transparent;
    padding:0 0 20px 0;
}
.fa-tired{
    color:orangered
}
#empty{
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin-top:5cm;
}
@media only screen and (max-width:600px){
    h2{
        font-size:20px
    }
    h4{
        font-size:15px
    }
}
</style>