<template>
<div id="signup">
  <h2 id="head">Get Started with Swiggy !</h2>
  <form id="form1" return @submit.stop.prevent="signup()">
      <input required id="name" v-model="names" placeholder="Name" />
      <br /><br />
      <h6>Select the gender:</h6>
      <input required id="g1" type="radio" value="Female" name="grp" /> Female
      <input required id="g2" type="radio" value="Male" name="grp" /> Male <br /><br />
      <input id="phno" v-model="phone" placeholder="Phone Number" />
      <br /><br />
      <input required id="address" v-model="address" placeholder="Address" />
      <br /><br />
      <input id="username" v-model="username" placeholder="Username" />
      <label id="labuser" style="color: red; visibility: hidden">Username and Password cannot be same</label>
      <br />
      <input id="password" type = "password" v-model="password" placeholder="Password" />
      <label id="labpass" style="color: red; visibility: hidden">Password should be alteast 8 characters long</label>
      <br />
      <button id="button" type="submit">Signup</button>
  </form>
</div>
</template>

<script>
export default {
  name:'Signup',
  data(){
    return{
      names:'',
      username:'',
      password:'',
      phone:'',
      address:'',
    }
  },
  methods: {
    signup() {
      var user = document.getElementById("username").value;
      var pass = document.getElementById("password");
      var phone = document.getElementById("phno").value;
      var regun = /^([^A-Z][a-z0-9_]+)@([gmail yahoo outlook]+).(com)$/;
      var regph = /^[7-9]\d{9}$/;
      if (regph.test(phone) == false) {
        alert("phone number should be 10 digits starting with 7,8 or 9");
        return false;
      }
      else if (regun.test(user) == false) 
      {
        alert("username should be in format name@domain.com \ndomain can be: gmail,yahoo,outlook");
        return false;
      } 
      else if (pass.value.trim().length < 8) 
      {
        document.getElementById("labpass").style.visibility = "visible";
        pass.style.border = "solid red 2px"
        return false;
      } 
      else if (user.trim() == pass.value.trim()) 
      {
        document.getElementById("labuser").style.visibility = "visible";
        user.style.border = "solid red 2px"
        pass.style.border = "solid red 2px"
        return false;
      } 
      else 
      {
        this.$router.push({name: 'Hotelpage'})
      }
    },
  },
};
</script>

<style scoped>
#head{
  margin-left:3.5cm;
  margin-top:1cm;
}
#button{
  margin-left: 1.5cm;
  background:black;
  color:white; 
  font-weight: bold;
  margin-bottom:1cm;
}
#name{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:30px;
  width:6cm;
}
#phno{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:30px;
  width:6cm;
}
#username{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:30px;
  width:6cm;
}
#password{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:30px;
  width:6cm;
}  
#address{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:30px;
  width:6cm;
}
#form1{
  margin-left:5cm;
  margin-top:1cm
}
#signup{
  box-sizing: border-box;
  -webkit-box-sizing:border-box;
  position:absolute;
  border:1px rgb(182, 181, 181) solid;
  box-shadow: 3px 3px rgba(136, 134, 134,0.3);
  background-image: linear-gradient(to bottom,rgb(248, 147, 24),rgb(245, 167, 22));
  height:fit-content;
  width:600px;
  margin-top: 2cm;
}
</style>