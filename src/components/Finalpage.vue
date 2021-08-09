<template>
<div>
  <div>
    <Header />
  </div>
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
  <div>
      <h3 id="finalhead">You succesfully placed your order !</h3>
      <h3 id="finalhead1">Now help us by sharing your experience</h3>
      <br />
      <div class="box">
        <div class="starbox">
          <input name="star" type="radio" class="hide" id="rate-5" />
          <label id="label" for="rate-5" class="fas fa-star"></label>
          <input name="star" type="radio" class="hide" id="rate-4" />
          <label id="label" for="rate-4" class="fas fa-star"></label>
          <input name="star" type="radio" class="hide" id="rate-3" />
          <label id="label" for="rate-3" class="fas fa-star"></label>
          <input name="star" type="radio" class="hide" id="rate-2" />
          <label id="label" for="rate-2" class="fas fa-star"></label>
          <input name="star" type="radio" class="hide" id="rate-1" />
          <label id="label" for="rate-1" class="fas fa-star"></label>
        </div>
        <form id="feedbackform" name="form" return @submit.stop.prevent="submit()">
          <header id="header"></header>
          <br />
          <textarea
            id="feedback"
            placeholder="Write your feedback here"
            name ="text"
          ></textarea>
          <br />
          <button id="feedbackbtn" type="submit">POST</button>
        </form>
        <div>
          <button id="skip" @click="skip">Skip</button>
          </div>
      </div>
      </div>
      </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components:{
    Header
  },
  methods: {
    skip() {
      this.$router.push({ name: "Swiggy" });
    },
    submit() {
      var empt = document.forms["form"]["text"].value;
      if (empt == "") {
        alert("Please rate us and write your feedback");
        return false;
      } 
      else {
        this.$router.push({ name: "Swiggy" });
      }
    },
  },
};
</script>
<style>
#finalhead {
  text-align: center;
  background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgKCAgICAgIBwcHCg0HBwcHCA8ICQcNFREWFiARHxUYHSggGBolGxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrKzc3NzcrKzctLS0tKysrLSstLSsrKysrKysrKy0rKys3LSsrKysrKysrKysrKysrK//AABEIAL0BCwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAABAgADBAcF/8QAGxABAQEAAwEBAAAAAAAAAAAAAAERAgMygSL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAhL/2gAMAwEAAhEDEQA/APlEVExUD6PlcVERcLG3KoqJioWN+auKlRFRONeauVTnKqUrG06XKqVGsnGs6XranW0sP2rRanW0sK9NaLRam08RemtTTUUYx6oqOSqmnjHqpqKq1NPGHVTUVVRTYdJ5Iq6imw6TU1SaGHSEVdTTY9Irpwn5n1zrp1+Z9NhX6EVExUaPa5VFREXCxrzVRURFQsayritRCWNZVmVMpLGsq5W1LFi50ttRraWH6VotGgsL0dFFFoxF6a1NrUWjGdoqa1FDLqioqqimx6oqKqpoY9JqKqppsehUVVTQx6TUVdRTY9Jrp1z8xzrp1+YGNe6VcRFNnryqiomGFjWVcMTDA0lWYmKLGkplVKg6WNJVFOnSxWnW0aNLD9KGjRpYXo2pbQMTa1FrWpoxFrVNKaWM7U0U1NGMrRU0poxlU1NVU08Y1NTVVNDKoqaupoY9Jq+vzEVfX5n0MenuioiKjfHqxRghgxrKsxMMGNJVSqQdJcqimViVKrSliVqmSww9LBiwtYWtoIrRRSKSLRU01IRaKLSmkzoqaaKGVSmqqaGdTU1VTQyqamqTQyqa6dfmOddOvzAxr2RUSY6XpyqUmGBpKqFJJeqZOkYqVTaGSrVadS2g9VrJOkekWtrA9YVqCTawrVJJtahqCRWqFVJIoqaqpoZ1NFNBM6mpqk0M6mpqqmhlU104eYir4eYGVeuEQul6EVFJhNpKWBJWkpIPVaySStJTp0j0sCFaQzEesGFpFrUMCS1DCpTRRWYkVIpSGdAIJFTU1VTQzqamqqaGVFXw8xFXw8wMq9SomGOp3SqhiSGkqmEpCtYhiMkMD0sCStOtoYj1TBtI9a0MxFoZgRMmmhKaARQmipNCUUA0BFTU00UazqaDUhlRV8PMRV8PMDOvTFIVHU7IYQQuUtAQamSoKZmYjLAkosGFMswSZDAgzMLSKighKWqTQSaKGBJrJpopM6mimgIqamqqaGVFXw8xzrpw8w2VegxJdTriimUhcqmBCoWjMFKYEjYhiUWDFT0sGIazMNIa1DMmkGYETUMKSaAaCTQKRSRU0EEipqaqppsqmunDzHOunX5hxlXYhnU6YoxJgXFEawVFMGClHUsStVpS2keqYaNI9UydZJnQwIEMySDMCJgakksKzEQSaKSKKmmihnU0FNDKprp1+Z9cq6cL+Z9Ux6d4UmOl1RTAhUJ1JClMG0KlUUklaWDEZZmI9ZmYjZgyQzMCDMwqSrBgRNQQSaKK1ARQm1SaGdTU2qqaGXVTXTr8z65V04X8xUY9V2IhdDpioyVBcYgg5SwIUYdSSVpYQkZYMSiwYgQzJNmagia0MxUMGCSYUpCaAQSKKmmpNlRUVVTTZdVNdOvzHKunX5n1TDqv/9k=);
  background-clip: text;
  color: transparent;
  font-family: "Itim";
  margin-top:2cm;
}
#finalhead1 {
  text-align: center;
  background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgKCAgICAgIBwcHCg0HBwcHCA8ICQcNFREWFiARHxUYHSggGBolGxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrKzc3NzcrKzctLS0tKysrLSstLSsrKysrKysrKy0rKys3LSsrKysrKysrKysrKysrK//AABEIAL0BCwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAABAgADBAcF/8QAGxABAQEAAwEBAAAAAAAAAAAAAAERAgMygSL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAhL/2gAMAwEAAhEDEQA/APlEVExUD6PlcVERcLG3KoqJioWN+auKlRFRONeauVTnKqUrG06XKqVGsnGs6XranW0sP2rRanW0sK9NaLRam08RemtTTUUYx6oqOSqmnjHqpqKq1NPGHVTUVVRTYdJ5Iq6imw6TU1SaGHSEVdTTY9Irpwn5n1zrp1+Z9NhX6EVExUaPa5VFREXCxrzVRURFQsayritRCWNZVmVMpLGsq5W1LFi50ttRraWH6VotGgsL0dFFFoxF6a1NrUWjGdoqa1FDLqioqqimx6oqKqpoY9JqKqppsehUVVTQx6TUVdRTY9Jrp1z8xzrp1+YGNe6VcRFNnryqiomGFjWVcMTDA0lWYmKLGkplVKg6WNJVFOnSxWnW0aNLD9KGjRpYXo2pbQMTa1FrWpoxFrVNKaWM7U0U1NGMrRU0poxlU1NVU08Y1NTVVNDKoqaupoY9Jq+vzEVfX5n0MenuioiKjfHqxRghgxrKsxMMGNJVSqQdJcqimViVKrSliVqmSww9LBiwtYWtoIrRRSKSLRU01IRaKLSmkzoqaaKGVSmqqaGdTU1VTQyqamqTQyqa6dfmOddOvzAxr2RUSY6XpyqUmGBpKqFJJeqZOkYqVTaGSrVadS2g9VrJOkekWtrA9YVqCTawrVJJtahqCRWqFVJIoqaqpoZ1NFNBM6mpqk0M6mpqqmhlU104eYir4eYGVeuEQul6EVFJhNpKWBJWkpIPVaySStJTp0j0sCFaQzEesGFpFrUMCS1DCpTRRWYkVIpSGdAIJFTU1VTQzqamqqaGVFXw8xFXw8wMq9SomGOp3SqhiSGkqmEpCtYhiMkMD0sCStOtoYj1TBtI9a0MxFoZgRMmmhKaARQmipNCUUA0BFTU00UazqaDUhlRV8PMRV8PMDOvTFIVHU7IYQQuUtAQamSoKZmYjLAkosGFMswSZDAgzMLSKighKWqTQSaKGBJrJpopM6mimgIqamqqaGVFXw8xzrpw8w2VegxJdTriimUhcqmBCoWjMFKYEjYhiUWDFT0sGIazMNIa1DMmkGYETUMKSaAaCTQKRSRU0EEipqaqppsqmunDzHOunX5hxlXYhnU6YoxJgXFEawVFMGClHUsStVpS2keqYaNI9UydZJnQwIEMySDMCJgakksKzEQSaKSKKmmihnU0FNDKprp1+Z9cq6cL+Z9Ux6d4UmOl1RTAhUJ1JClMG0KlUUklaWDEZZmI9ZmYjZgyQzMCDMwqSrBgRNQQSaKK1ARQm1SaGdTU2qqaGXVTXTr8z65V04X8xUY9V2IhdDpioyVBcYgg5SwIUYdSSVpYQkZYMSiwYgQzJNmagia0MxUMGCSYUpCaAQSKKmmpNlRUVVTTZdVNdOvzHKunX5n1TDqv/9k=);
  background-clip: text;
  color: transparent;
  font-family: "Itim";
}
#feedback {
  border-style: solid;
  border-color: grey;
  height: 3cm;
  width: 10cm;
}
#header {
  margin-left: 3.1cm;
  font-size: 22px;
  font-weight: 900;
  color: white;
  transition: all 0.2s ease;
}
#feedbackbtn {
  padding: 10px 50px;
  background: gray;
  margin-top: 0.5em;
  margin-left: 3cm;
  font-weight: 700;
}
#skip {
  margin-bottom: -1.5cm;
  margin-left: 12cm;
  padding: 8px 15px;
  background: gray;
  font-weight: 700;
}

.box {
  padding: 10px 50px 30px 50px;
  border-style: solid;
  border-color: black;
  background: rgb(32, 28, 28);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 12cm;
  margin-right: 12cm;
}
.starbox {
  padding: 20px 30px;
  border-style: solid;
  border-color: rgb(32, 28, 28);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
}
.hide {
  display: none;
}

#label {
  font-size: 30px;
  width: 1cm;
  color: gray;
  transition: all 0.2s ease;
}

.hide:not(:checked) ~ #label:hover,
.hide:not(:checked) ~ #label:hover ~ #label {
  color: gold;
}
.hide:checked ~ #label {
  color: gold;
}
@media only screen and (min-width:500px) and (max-width:600px){
.box {
  padding: 10px 50px 30px 50px;
  border-style: solid;
  border-color: black;
  background: rgb(32, 28, 28);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1cm;
  margin-right: 1cm;
}
#feedback {
  border-style: solid;
  border-color: grey;
  height: 3cm;
  width: 8cm;
}
#feedbackbtn {
  padding: 10px 50px;
  background: gray;
  margin-top: 0.5em;
  margin-left: 2cm;
  font-weight: 700;
}
#skip {
  margin-bottom: -1.5cm;
  margin-left: 9cm;
  padding: 8px 15px;
  background: gray;
  font-weight: 700;
}
}
@media only screen and (max-width:500px){
.box {
  padding: 10px 50px 30px 50px;
  border-style: solid;
  border-color: black;
  background: rgb(32, 28, 28);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0cm;
  margin-right: 0cm;
}
#skip {
  margin-bottom: -1.5cm;
  margin-left: 7cm;
  padding: 8px 15px;
  background: gray;
  font-weight: 700;
}
#feedback {
  border-style: solid;
  border-color: grey;
  height: 3cm;
  width: 8cm;
}
#feedbackbtn {
  padding: 10px 50px;
  background: gray;
  margin-top: 0.5em;
  margin-left: 2cm;
  font-weight: 700;
}
}
@media only screen and (min-width:750px) and (max-width:800px){
.box {
  padding: 10px 50px 30px 50px;
  border-style: solid;
  border-color: black;
  background: rgb(32, 28, 28);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 4cm;
  margin-right: 4cm;
}
#skip {
  margin-bottom: -1.5cm;
  margin-left: 9cm;
  padding: 8px 15px;
  background: gray;
  font-weight: 700;
}
#feedback {
  border-style: solid;
  border-color: grey;
  height: 3cm;
  width: 8cm;
}
#feedbackbtn {
  padding: 10px 50px;
  background: gray;
  margin-top: 0.5em;
  margin-left: 2cm;
  font-weight: 700;
}
}
@media only screen and (min-width:900px) and (max-width:1100px){
.box {
  padding: 10px 50px 30px 50px;
  border-style: solid;
  border-color: black;
  background: rgb(32, 28, 28);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 4cm;
  margin-right: 4cm;
}
#skip {
  margin-bottom: -1.5cm;
  margin-left: 16cm;
  padding: 8px 15px;
  background: gray;
  font-weight: 700;
}
#feedback {
  border-style: solid;
  border-color: grey;
  height: 3cm;
  width: 8cm;
}
#feedbackbtn {
  padding: 10px 50px;
  background: gray;
  margin-top: 0.5em;
  margin-left: 2cm;
  font-weight: 700;
}
}
</style>