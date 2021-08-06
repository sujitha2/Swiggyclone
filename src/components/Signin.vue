<template>
  <div>
    <h2 id="head">Get Started with Swiggy !</h2>
    <form id ="form" return @submit.stop.prevent="signin()">
    <input id="uname" v-model="uname" placeholder="Username">
    <label id="labeluser" style="color: red; visibility: hidden">Username and Password cannot be same</label>
    <br>
    <input id="pword" type="password" v-model="pword" placeholder="password">
    <label id="labelpass" style="color: red; visibility: hidden">Password should be alteast 8 characters long</label>
    <br>
    <button id = "button3" type="submit">Signin</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      uname:'',
      pword:'',
    }
  },
    methods:{
    signin() {
      var user = document.getElementById("uname").value;
      var pass = document.getElementById("pword");
      var regun = /^([^A-Z][a-z0-9_]+)@([gmail yahoo outlook]+).(com)$/;
      if (regun.test(user) == false) 
      {
        alert("username should be in format name@domain.com \ndomain can be: gmail,yahoo,outlook");
        return false;
      }
      else if (pass.value.trim().length < 8) 
      {
        document.getElementById("labelpass").style.visibility = "visible";
        pass.style.border = "solid red 2px"
        return false;
      } 
      else if (user.trim() == pass.value.trim()) 
      {
        document.getElementById("labeluser").style.visibility = "visible";
        user.style.border = "solid red 2px"
        pass.style.border = "solid red 2px"
        return false;
      } 
      else 
      {
        return true
      }
    }, 
  }
}

</script>
<style scoped>
#button3{
  margin-left: 2cm;
  background:black; 
  font-weight: bold;
  color:white;
  margin-bottom:1cm;
}
#head{
  margin-top: 2cm;
  margin-left:0.5cm;
}
#form{
  margin-left:2.5cm;
  margin-top:1cm;
}
#username{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:10px;
  width:2cm;
}
#password{
  border: 2px solid rgb(0,0,49);
  border-style: outset;
  height:10px;
  width:2cm;
}

</style>

