<template>
<h2 id="h2">Enjoy your favourite dish from your favourite restaurants !</h2>
<div class = "hotels">
  <div id="outline"><img id="hotelpic"  class = "hotel1" @click="hotel1()" src="https://thumbs.dreamstime.com/b/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal-palak-sabji-jira-alu-rice-138549925.jpg"><div id="hotelname">Dream Foods</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3H_ufMpnpCR0lh2ETjnRi5KFW4G3SyMsSnQ&usqp=CAU" @click="hotel1()"><div id="hotelname">Veetu virundhu</div></div>
  <div id="outline"><img id="hotelpic" class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMvMKxnuVDYhKqtyIEcJBefWCxfhgu5FBaA&usqp=CAU" @click="hotel1()"><div id="hotelname">Kebabs World</div></div>
  <div id="outline"><img id="hotelpic" class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmIqOZFRK-tO-GuhAleuYcYWTV2hwzc_y3w&usqp=CAU" @click="hotel1()"><div id="hotelname">Chat Corner</div></div>
  <div id="outline"><img id="hotelpic" class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw6Kw8l1PiWhBLJcxtt3LQ22P2jP7gwLoqQ&usqp=CAU" @click="hotel1()"><div id="hotelname">Icecream Hub</div></div>
  <div id="outline"><img id="hotelpic" class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmIqOZFRK-tO-GuhAleuYcYWTV2hwzc_y3w&usqp=CAU" @click="hotel1()"><div id="hotelname">Chat Corner</div></div>
  <div id="outline"><img id="hotelpic" class = "hotel1" src="https://thumbs.dreamstime.com/b/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal-palak-sabji-jira-alu-rice-138549925.jpg" @click="hotel1()"><div id="hotelname">Dream Foods</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMvMKxnuVDYhKqtyIEcJBefWCxfhgu5FBaA&usqp=CAU" @click="hotel1()"><div id="hotelname">Kebabs World</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3H_ufMpnpCR0lh2ETjnRi5KFW4G3SyMsSnQ&usqp=CAU" @click="hotel1()"><div id="hotelname">Veetu virundhu</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw6Kw8l1PiWhBLJcxtt3LQ22P2jP7gwLoqQ&usqp=CAU" @click="hotel1()"><div id="hotelname">Icecream Hub</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMvMKxnuVDYhKqtyIEcJBefWCxfhgu5FBaA&usqp=CAU" @click="hotel1()"><div id="hotelname">Kebabs World</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmIqOZFRK-tO-GuhAleuYcYWTV2hwzc_y3w&usqp=CAU" @click="hotel1()"><div id="hotelname">Chat Corner</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw6Kw8l1PiWhBLJcxtt3LQ22P2jP7gwLoqQ&usqp=CAU" @click="hotel1()"><div id="hotelname">Icecream Hub</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" @click="hotel1()" src="https://thumbs.dreamstime.com/b/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal-palak-sabji-jira-alu-rice-138549925.jpg"><div id="hotelname">Dream Foods</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3H_ufMpnpCR0lh2ETjnRi5KFW4G3SyMsSnQ&usqp=CAU" @click="hotel1()"><div id="hotelname">Veetu virundhu</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" src="https://thumbs.dreamstime.com/b/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal-palak-sabji-jira-alu-rice-138549925.jpg" @click="hotel1()"><div id="hotelname">Dream Foods</div></div>
  <div id="outline"><img id="hotelpic"  class = "hotel1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3H_ufMpnpCR0lh2ETjnRi5KFW4G3SyMsSnQ&usqp=CAU" @click="hotel1()"><div id="hotelname">Veetu virundhu</div></div>
</div>
</template>

<script>
export default {
  methods:{
    hotel1(){
      this.$router.push({name:'Hotelpage'});
    },
  }
}
</script>
<style scoped>
#hotelpic{
  width: 250px;
  aspect-ratio: auto 250 / 160;
  height: 150px;
  padding:20px 20px 0px 20px;
}
#hotelname{
  font-size: 18px;
  font-weight: bold;
  padding:0px 20px 20px 20px;
}
#h2{
  font-size: 35px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrb08isdc0h6s8luKSot8gQjQctn31KAtCQ&usqp=CAU");
  background-clip:text ;
  color: transparent;
  text-align: center;
  margin-left: 0.5cm;
  padding-top:40px;
}
.hotels{
  box-sizing: border-box;
  display:grid;
  grid-template-columns: repeat(auto-fill,250px);
  justify-content:space-evenly;
  align-self: auto;
  padding:0px 40px 0px 40px;
}
#outline:hover{
  border:1px rgb(182, 181, 181) solid;
  box-shadow: 3px 3px rgba(136, 134, 134,0.3);
}
@media only screen and (max-width : 600px){
  #hotelpic{
  width: 100px;
  aspect-ratio: auto 250 / 160;
  height: 60px;
  padding:20px 20px 0px 20px;
}
#hotelname{
  font-size: 10px;
  font-weight: bold;
  padding:0px 20px 20px 20px;
}
#h2{
  font-size: 18px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrb08isdc0h6s8luKSot8gQjQctn31KAtCQ&usqp=CAU");
  background-clip:text ;
  color: transparent;
  text-align: center;
  margin-left: 0.5cm;
  padding-top:20px;
}
.hotels{
  box-sizing: border-box;
  display:grid;
  grid-template-columns: repeat(auto-fill,80px);
  justify-content:space-evenly;
  align-self: auto;
  padding:0px 20px 0px 20px;
}
#outline:hover{
  border:1px rgb(182, 181, 181) solid;
  box-shadow: 3px 3px rgba(136, 134, 134,0.3);
}
}
@media only screen and (min-width : 700px) and (max-width :1030px){
  #hotelpic{
  width: 200px;
  aspect-ratio: auto 250 / 160;
  height: 120px;
  padding:20px 20px 0px 20px;
}
#hotelname{
  font-size: 15px;
  font-weight: bold;
  padding:0px 20px 20px 20px;
}
#h2{
  font-size: 18px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrb08isdc0h6s8luKSot8gQjQctn31KAtCQ&usqp=CAU");
  background-clip:text ;
  color: transparent;
  text-align: center;
  margin-left: 0.5cm;
  padding-top:20px;
}
.hotels{
  box-sizing: border-box;
  display:grid;
  grid-template-columns: repeat(auto-fill,200px);
  justify-content:space-evenly;
  align-self: auto;
  padding:0px 20px 0px 20px;
}
#outline:hover{
  border:1px rgb(182, 181, 181) solid;
  box-shadow: 3px 3px rgba(136, 134, 134,0.3);
}
}
</style>