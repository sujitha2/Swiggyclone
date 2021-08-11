<template>
<div>
  <h2 id="head">Get Started with Swiggy !</h2>
  <form id="form1" return @submit.stop.prevent="signup()">
      <input required id="name" v-model="form.names" placeholder="Name" />
      <br /><br />
      <h6>Select the gender:</h6>
      <input required id="g1" type="radio" v-model="form.gender" value="Female" name="grp" /> Female
      <input required id="g2" type="radio" v-model="form.gender" value="Male" name="grp" /> Male <br /><br />
      <input id="phno" v-model="form.phone" placeholder="Phone Number" />
      <br /><br />
      <input required id="address" v-model="form.address" placeholder="Address" />
      <br /><br />
      <input id="username" v-model="form.username" placeholder="Username" />
      <label id="labuser" style="color: red; visibility: hidden">Username and Password cannot be same</label>
      <br />
      <input id="password" type = "password" v-model="form.password" placeholder="Password" />
      <label id="labpass" style="color: red; visibility: hidden">Password should be alteast 8 characters long</label>
      <br />
      <button id="button" @click="postdata" type="submit">Signup</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Signup',
  data(){
    return{
      form : {
      names:'',
      gender:'',
      username:'',
      password:'',
      phone:'',
      address:'',
      },
      props:["signup"],
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
    postdata(){
      axios.post('https://jsonplaceholder.typicode.com/posts',this.form).then((response) => {
        console.log(response.data)
        this.props.signup = this.form.names
      })
      .catch((error) => {
        console.log(error)
      })
    }
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
  outline:none;
}
#phno{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:30px;
  width:6cm;
  outline:none;
}
#username{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:30px;
  width:6cm;
  outline:none;
}
#password{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:30px;
  width:6cm;
  outline:none;
}  
#address{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:30px;
  width:6cm;
  outline:none;
}
#form1{
  margin-left:5cm;
  margin-top:1cm
}
@media only screen and (max-width:600px){
  #head{
  margin-left:1cm;
  margin-top:1cm;
  font-size: 20px;
}
#button{
  margin-left: 1cm;
  background:black;
  color:white; 
  font-weight: bold;
  margin-bottom:1cm;
  margin-top: -1cm;
}
#name{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:25px;
  width:4cm;
}
#phno{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
 height:25px;
  width:4cm;
}
#username{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:25px;
  width:4cm;
  margin-bottom: -2cm;
}
#password{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:25px;
  width:4cm;
}  
#address{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:25px;
  width:4cm;
}
#form1{
  margin-left:1.8cm;
  margin-top:1cm
}
}
</style>